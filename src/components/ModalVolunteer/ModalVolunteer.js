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

const style = {
    width:'92%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
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
        <Container maxWidth="md">
            <Box sx={style} style={{border:'none',borderRadius: 28}}>
                <Typography variant="h3" component="h2" style={{marginBottom:15,fontWeight:'bold',textAlign:"center"}}>
                    Хотите стать волонтером?
                </Typography>
                <Typography variant="h5" sx={{textAlign:'center',fontWeight:'bold'}}>Станьте волонтером,
                    чтобы помогать другим, находить новых друзей,
                    путешествовать, участвовать в масштабных событиях,
                    получать уникальный опыт, а также пользоваться привилегиями за волонтерскую деятельность
                </Typography>
                <Typography  variant="h6" component="p" style={{marginBottom:15,textAlign:"center"}}>
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
                            style={{width:'100%',marginBottom:20}}
                        />
                        <FormControlLabel sx={{alignSelf:'flex-start'}} control={<Checkbox />} label="Хочу помогать индивидуально" />
                        <div style={{display:'flex',width:'100%',flexDirection:'column',margin:'20px 0 20px 0'}}>
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
                        <Button
                            variant="contained"
                            size="large"
                            style={
                                {
                                    color:'#ffff',
                                    backgroundColor:'#1043c5',
                                    width:'100%',
                                    marginTop:20
                                }
                            }>Стать волонтером</Button>
                    </FormGroup>
                </FormControl>
            </Box>
        </Container>
    );
}
export default ModalVolunteer;
