import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Alert, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Modal, TextField} from "@mui/material";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {useState} from "react";
import axios from "axios";
import {API_KEY} from "../../consts";
import {useDispatch} from "react-redux";
import {closeWindowModal} from "../../redux/actions/modalWindowAction";
import TelegramLoginButton from 'react-telegram-login';
import $ from 'jquery';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        xs: "93%",
        sm: 600
    },
    height: {
        xs: "93%",
        sm: "auto"
    },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: {
        xs: "7%",
        sm: 4
    },
    borderRadius: {xs: 0, sm:8}
};

function ModalReg(props) {
    const [userInput,setUserInput] = useState('');
    const [defaultCor, setDefaultCoor] = useState([54.314192, 48.403132]);
    const [visibleAlert,setVisibleAlert] = useState(true);
    const [valueCheckBoxes,setValueCheckBoxes] = useState({gas:false,water:false,CP:false,el:false})
    const dispatch = useDispatch()

    const handleUserInput = (e) => {
        setUserInput(e.target.value)
    }
   async function fetchAdress () {
        await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${userInput}`)
            .then(res => {
                console.log(res)
                if (res.data.response.GeoObjectCollection.featureMember.length === 0){
                    setVisibleAlert(false)
                } else {
                    let response = res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
                    let stringCoords = response.split(' ');
                    let coords = [+stringCoords[1],+stringCoords[0]]
                    setDefaultCoor(coords)
                    setVisibleAlert(true)
                }
            }
            )
            .catch(err => console.log(err))
    }
    const handleUserSearch = (e) => {
        console.log(userInput)
        fetchAdress()
        setUserInput('')
    }
    const handleTelegramResponse = (response) => {
        console.log(response);
        if(response){
            $.post( "http://109.197.196.107:8000/service/new_user_registrations/" ,{
                id:response.id,
                userName:response.username,
                gas: valueCheckBoxes.gas,
                el: valueCheckBoxes.el,
                water: valueCheckBoxes.water,
                CP: valueCheckBoxes.CP,
                coord1: defaultCor[0],
                coord2: defaultCor[1]
            });
        }
    };
  return (
    <Modal
        sx={{backdropFilter: "blur(5px)",backgroundColor:'rgb(28 74 238 / 25%)'}}
    style={{border:'none'}}
    open={props.open}
    onClose={()=>dispatch(closeWindowModal())}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
>
    <Box sx={style} style={{border:'none', }} >
        <CloseIcon sx={{position: "absolute", right: "35px", cursor: "pointer"}} onClick={()=>dispatch(closeWindowModal())}/>
        <Typography id="modal-modal-title" variant="h4" component="h2" style={{marginBottom:15,fontWeight:'bold',textAlign:"center"}}>
            Подпишитесь на рассылку
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="p" style={{marginBottom:15,textAlign:"center"}}>
            Выберите категории на которые хотите получать уведомления
        </Typography>
        <FormControl required style={{display:"flex"}}>
            <FormLabel component="legend"> Выберите минимум одну категорию</FormLabel>
            <FormGroup style={{display:"flex",alignItems:'center'}}>
                <div
                    style={
                        {
                            display:'flex',
                            justifyContent:'space-evenly'
                        }
                    }>
                    <div style={{display:'flex',flexDirection:'column',marginBottom:15}}>
                        <FormControlLabel onChange={(e)=> {
                            setValueCheckBoxes(prevState => {
                                return {
                                        ...prevState,
                                        el:e.target.checked
                                }
                            })
                        }} control={<Checkbox />} label="Электричество" />
                        <FormControlLabel onChange={(e)=> {
                            setValueCheckBoxes(prevState =>{
                                return {
                                    ...prevState,
                                    water:e.target.checked

                                }})
                            console.log(valueCheckBoxes)
                        }} control={<Checkbox />} label="Водоснабжение"/>
                    </div>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <FormControlLabel onChange={(e)=> {
                            setValueCheckBoxes(prevState =>{
                                return {
                                    ...prevState,
                                    gas:e.target.checked

                            }})
                            console.log(valueCheckBoxes)
                        }}  control={<Checkbox />} label="Газ" />
                        <FormControlLabel onChange={(e)=> {
                            setValueCheckBoxes(prevState =>{
                                return {
                                        ...prevState,
                                        CP:e.target.checked
                                }})
                            console.log(valueCheckBoxes)
                        }}  control={<Checkbox />} label="ЧП и ЧС" />
                    </div>
                </div>
                <div style={{display:'flex',width:'100%',flexDirection:'column',marginBottom:15}}>
                    <div style={{display:'flex'}}>
                        <TextField
                            className="user-input"
                            label="Введите ваш адрес"
                            onChange={handleUserInput}
                            value={userInput}
                            style={{width:'100%'}}
                        />
                        <Button
                            style={{borderRadius: '0 5px 5px 0'}}
                            variant="contained"
                            onClick={handleUserSearch}
                            color="primary"
                        >Найти</Button>
                    </div >
                    <Alert
                        className={visibleAlert?'unvisible-alert':''}
                        style={{width: "95%",padding: '15px 2.5% 15px 2.5%'}}
                        severity="warning">Похоже, что вы ввели некорректный адрес </Alert>
                </div>
                <YMaps>
                    <Map
                        width={"100%"}
                        state={{
                            center: defaultCor,
                            zoom: 15,
                        }}
                    >
                        <Placemark geometry={defaultCor}/>
                    </Map>
                </YMaps>
                <Box sx={{marginTop: 2}}>
                    <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="UL_public_alerts_bot" />
                </Box>
            </FormGroup>
        </FormControl>
    </Box>
</Modal>
  );
}
export default ModalReg;
