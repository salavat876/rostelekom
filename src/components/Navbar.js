import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Modal, TextField} from "@mui/material";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {useState} from "react";
import axios from "axios";
import {API_KEY} from "../consts";

const useStyles = makeStyles({
  toolbar: {
    backgroundColor: "white",
    color: 'Black',
    
  },
});
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function NavBar() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [userInput,setUserInput] = useState('');
    const [defaultCor, setDefaultCoor] = useState([55.751574, 37.573856]);

    const handleUserInput = (e) => {
        setUserInput(e.target.value)
    }
    async function fetchAdress () {
        await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${userInput}`)
            .then(res => {
                console.log(res)
                let response = res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
                let stringCoords = response.split(' ');
                let coords = [+stringCoords[0],+stringCoords[1]]
                    setDefaultCoor(coords)
                }
            )
            .catch(err => console.log(err))
    }
    const handleUserSearch = (e) => {
        console.log(userInput)
        setUserInput('')
        fetchAdress()
    }
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static" style={{backgroundColor:'#ffff'}} >
        <Toolbar className={classes.toolbar} sx={{
            minWidth:1200,
            margin:'0 auto'
        }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Домой
          </Typography>
          <Button onClick={handleOpen}  variant="contained" color="primary" style={{textTransform: "none",marginRight:10}}>Подписаться на рассылку</Button>
            <Button variant="contained" style={{textTransform: "none", backgroundColor:'#f82020'}}>Стать волонтером</Button>
        </Toolbar>
          <Modal
              style={{border:'none'}}
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box sx={style} style={{border:'none',borderRadius: 28}}>
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
                                  <FormControlLabel control={<Checkbox />} label="Электричество" />
                                  <FormControlLabel  control={<Checkbox />} label="Водоснабжение"/>
                              </div>
                              <div style={{display:'flex',flexDirection:'column'}}>
                                  <FormControlLabel  control={<Checkbox />} label="Газ" />
                                  <FormControlLabel  control={<Checkbox />} label="ЧП и ЧС" />
                              </div>
                          </div>
                          <div style={{display:'flex'}}>
                              <TextField
                                  label="Введите ваш адрес"
                                  variant="outlined"
                                  onChange={handleUserInput}
                                  value={userInput} />
                              <Button
                                  variant="contained"
                                  onClick={handleUserSearch}
                                  color="primary"
                              >Найти</Button>
                          </div>
                          <YMaps>
                              <Map
                                  defaultState={{
                                      center: defaultCor,
                                      zoom: 5,
                                  }}
                              >
                                  <Placemark geometry={defaultCor}/>
                              </Map>
                          </YMaps>
                          <Button
                              style={{marginTop:15}}
                              variant="contained"
                              size="large"
                          >Подключить телеграм</Button>
                      </FormGroup>
                  </FormControl>
              </Box>
          </Modal>
      </AppBar>
    </Box>
  );
}