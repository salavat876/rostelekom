import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Alert, Checkbox, Container, FormControl, FormControlLabel, FormGroup, Modal, TextField} from "@mui/material";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {closeVolunteer} from "../../redux/actions/modalWindowAction";
import {API_KEY} from "../../consts";
import TelegramLoginButton from "react-telegram-login";
import $ from "jquery";

const style = {
    bgcolor: 'background.paper',
    p: {
        xs: 1,
        sm: 6
    },
    px:{
        xs: 1,
        sm: 20
    },
    borderRadius: "9px"
};

function ModalVolunteer(props) {
    const [userInput,setUserInput] = useState('');
       const [userAdress,setUserAdress] = useState('')
    const [defaultCor, setDefaultCoor] = useState([54.314192, 48.403132]);
    const [visibleAlert,setVisibleAlert] = useState(true)

    const handleUserInput = (e) => {
        setUserInput(e.target.value)
    }
    const changeUserAddress = (e) => {
        setUserAdress(e.target.value)
    }
    const addressSearch = () => {
        fetchAdress()
    }
    const handleTelegramResponse = (response) => {
        console.log(response);
        if(response){
            $.post( "http://109.197.196.107:8000/service/new_volonter_registrations/" ,{
                id:response.id,
            });
        }
    };
    async function fetchAdress () {
        await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${userAdress}`)
            .then(res => {
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
    return (
        <Container maxWidth="lg" sx={{marginTop:"-5rem"}}>
            <Box sx={style}>
                <Typography variant="h3" component="h2" style={{marginBottom:15,fontWeight:'bold',textAlign:"center"}} sx={{fontSize:{xs: "1.75em", sm:"3em"}}}>
                    Хотите стать волонтером?
                </Typography>
                <Typography variant="h5" sx={{textAlign:'center',mb:2,fontSize:{xs: "1em", sm:"1.5em"}}}>Станьте волонтером,
                    чтобы помогать другим, находить новых друзей,
                    путешествовать, участвовать в масштабных событиях,
                    получать уникальный опыт, а также пользоваться привилегиями за волонтерскую деятельность
                </Typography>
                <Typography  variant="h6" component="p" sx={{marginBottom:2,textAlign:"center",fontSize:{xs: "1em", sm:"1.25em"}}}>
                    Заполните форму для регистрации и вам придет уведомление
                </Typography>
                <FormControl required style={{display:"flex"}}>
                    <FormGroup style={{display:"flex",alignItems:'center',justifyContent:'space-between'}}>
                        <TextField
                            required
                            value={userInput}
                            onChange={handleUserInput}
                            label="ФИО"
                            variant="outlined"
                            style={{width:'100%',marginBottom:10}}
                        />
                        <FormControlLabel sx={{alignSelf:'flex-start'}} control={<Checkbox />} label="Хочу помогать индивидуально" />
                        <div style={{display:'flex',width:'100%',flexDirection:'column',margin:'10px 0 10px 0'}}>
                            <div style={{display:'flex'}}>
                                <TextField
                                    required
                                    className="user-input"
                                    label="Введите ваш адрес"
                                    onChange={changeUserAddress}
                                    value={userAdress}
                                    style={{width:'100%'}}
                                />
                                <Button
                                    onClick={addressSearch}
                                    style={{borderRadius: '0 5px 5px 0'}}
                                    variant="contained"
                                    color="primary"
                                >Найти</Button>
                            </div >
                            <Alert
                                className={visibleAlert?'unvisible-alert':''}
                                style={{width: "95%",padding: '15px 2.5% 15px 2.5%'}}
                                severity="warning">Похоже, что вы ввели некорректный адрес </Alert>
                        </div>
                        <YMaps >
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
                        <Box sx={{mt: 2}}>
                        <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="UL_volonter_bot" />
                        </Box>
                    </FormGroup>
                </FormControl>
            </Box>
        </Container>
    );
}
export default ModalVolunteer;
