import {Button, Container, FormControl, FormGroup, TextField, Typography} from "@mui/material";
import { Box } from "@mui/system";


const Feedback = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{backgroundColor:"white", p:6, borderRadius: 7}}>
                    <Typography  variant="h4" component="h4" style={{marginBottom:15,textAlign:"center"}}>
                        Обратная связь
                    </Typography>
                    <FormControl required style={{display:"flex"}}>
                        <FormGroup style={{display:"flex",alignItems:'center',justifyContent:'space-between'}}>
                            <TextField
                                required
                                label="ФИО"
                                variant="outlined"
                                style={{width:'100%',marginBottom:20}}
                            />
                            <TextField
                                required
                                multiline
                                label="Отзыв"
                                variant="outlined"
                                style={{width:'100%',marginBottom:20}}
                            />
                            <Button variant="contained">Отправить</Button>
                        </FormGroup>
                    </FormControl>
                </Box>
            </Container>
        </>
    )
}

export default Feedback;