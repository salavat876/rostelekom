import {Container, Grid, Link, Typography} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

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
    const { date, time, wish } = useDate();
    return (
        <main style={{marginTop:25}}>
            <Container maxWidth="lg">
                <Grid container style={{backgroundColor:"white", borderRadius:20, }} justifyContent="space-between">
                    <Grid item xs={12} md={8} style={{padding:25}}>
                        <Box sx={{display: "flex", flexDirection: "column", width: "100%"}}>
                            <Box sx={{display: "flex",  justifyContent: "space-between", marginBottom: 1}} >
                                <Typography variant="h5" component="h5">
                                    Сегодня {date}
                                </Typography>
                                <Typography variant="h5" component="h5">
                                    {time}
                                </Typography>
                            </Box>
                            <Typography variant="h4" component="h4" sx={{color: "green", marginBottom: 1}}>На данный момент всё хорошо</Typography>
                            <Typography variant="h5" component="h5" sx={{marginBottom: 1}}>Что происходит прямо сейчас:</Typography>
                            {
                                arr.slice(0, 5).map((item) => {
                                    return(<Typography variant="h6" key={item} sx={{marginBottom: 1}}><Link href="#" sx={{color:"blue", textDecoration:"none"}}>Shrimp and Chorizo Paella</Link></Typography>)
                                })
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} borderLeft={{xs: "none", md:"1px solid black"}} borderTop={{xs: "1px solid black", md: "none"}} sx={{display: "flex", flexDirection: "column", textAlign: "center"}} style={{padding:25}}>
                            <Box sx={{marginBottom: 2}}>
                                <Typography variant="h6" component="h6" align="center">
                                    Запланированные мероприятия
                                </Typography>
                            </Box>
                            {
                                arr2.slice(0, 7).map((item) => {
                                    return(<Typography variant="body" key={item} sx={{marginBottom: 2}}>Отключение электричества с 14 до 16 </Typography>)
                                })
                            }
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}

export default Dashboard;