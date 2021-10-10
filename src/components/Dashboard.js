import {Container, Grid, Typography} from "@mui/material";
import {Link}from 'react-router-dom'
import { Box } from "@mui/system";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useEffect, useState } from "react";
import {GeolocationControl, Map, TrafficControl, YMaps} from "react-yandex-maps";
import * as React from "react";
import {usePosition} from 'use-position'
import axios from "axios";
import $ from "jquery";
const words = ['Отключение воды','Отключение электричества','Ремонт газопровода','Ремонт дорог на инзенской']
const useDate = () => {

    const locale = 'ru';
    const [today, setDate] = useState(new Date()); 
  
    useEffect(() => {
        const timer = setInterval(() => { 
        setDate(new Date());
      }, 15 * 1000);
      return () => {
        clearInterval(timer); 
      }
    }, []);
  
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
    const hour = today.getHours();
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric' });
  
    return {
      date,
      time,
    };
  };

const arr = [1,2,3,4,5,6,7]
const arr2 = [1,2,3,4,5,6,7]

const Dashboard = () => {
    const watch = true;
    const {
        latitude,
        longitude,
        error,
    } = usePosition(watch, { enableHighAccuracy : true });
    const { date, time, wish } = useDate();
    return (
            <Container maxWidth="lg">
                <Grid container
                      style={{backgroundColor:"white", borderRadius:20,padding: 19 }} justifyContent="space-between">
                    <Grid item xs={12} md={8} style={{padding:25}}>
                        <Box
                            sx={
                                     {
                                         display: "flex", flexDirection: "column", width: "100%"
                                     }
                            }>
                            <Box sx={{display: "flex",  justifyContent: "space-between", marginBottom: 1}} >
                                <Typography sx={{fontWeight:'bold'}} variant="h5" component="h5">
                                    Сегодня {date}
                                </Typography>
                                <Typography sx={{
                                    alignItems: 'center',
                                    display: 'flex'
                                }} variant="h5" component="h5">
                                    <AccessTimeIcon/>
                                    {time}
                                </Typography>
                            </Box>
                            <Typography variant="h4" component="h4" sx={
                                {
                                    color: "green",
                                    marginBottom: 1,
                                    fontWeight:'bold'
                                }
                            }>На данный момент всё хорошо</Typography>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{marginBottom: 1}}
                            >Что происходит прямо сейчас:</Typography>
                            {
                                arr.slice(0, 5).map((item) => {
                                    return(
                                        <Typography variant="h6" key={item} sx={{marginBottom: 1}}>
                                            <Link to="/news" style={{color:"blue", textDecoration:"none"}}>
                                                Shrimp and Chorizo Paella
                                            </Link>
                                        </Typography>)
                                })
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} borderLeft={{xs: "none", md:"1px solid black"}} borderTop={{xs: "1px solid black", md: "none"}} sx={{display: "flex", flexDirection: "column", textAlign: "center"}} style={{padding:25}}>
                            <Box sx={{marginBottom: 2}}>
                                <Typography sx={{fontSize:' 1.2em',fontWeight:'bold'}}  variant="h6" component="h6" align="center">
                                    Запланированные мероприятия
                                </Typography>
                            </Box>
                            {
                                arr2.slice(0, 4).map((item,index) => {
                                    return(<Typography variant="body2" key={item} sx={{marginBottom: 2,fontSize:'1.09em'}}>{words[index]} с 14 до 16 </Typography>)
                                })
                            }
                    </Grid>
                </Grid>
                <Grid
                    container
                    sx={{
                        marginTop:3,
                        overflow:'hidden',
                        backgroundColor:"white",
                        borderRadius:7,
                          padding:6
                }}>
                    <Typography sx={{marginBottom:2,fontWeight:'bold',fontSize:32}} variant="h4" component="h2">Ситуация на дорогах</Typography>
                  <YMaps>
                      <Map
                          width={"100%"}
                          state={{
                              center: [latitude?latitude:54.314192, longitude?longitude:48.403132],
                              zoom: 15,
                          }}

                      >
                          <GeolocationControl/>
                          <TrafficControl state={{trafficShown: true}} options={{float:'right'}}/>
                      </Map>
                  </YMaps>
                </Grid>
            </Container>
    )
}

export default Dashboard;