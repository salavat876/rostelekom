import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import ModalReg from "./ModalReg/ModalReg";
import {useDispatch, useSelector} from "react-redux";
import {modalWindowAction, openModalVolunteer} from "../redux/actions/modalWindowAction";
import ModalVolunteer from "./ModalVolunteer/ModalVolunteer";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  toolbar: {
    backgroundColor: "white",
    color: 'Black',
  },
    titles:{
      textDecoration: "none",
        color: "black",
        cursor: "pointer",
        fontWeight: "bold",
        outline:'none !important'
    }
});
const style = {
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    
};
export default function NavBar() {
    const classes = useStyles();
    const open = useSelector(({window})=> window.isOpen);
    const openVolunteer = useSelector(({window})=>window.isOpenVolunteer)
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        dispatch(modalWindowAction())
    }
  return (
    <Box sx={{ flexGrow: 1,position:'sticky' }}>
      <AppBar style={{backgroundColor:'#ffff'}} >
        <Toolbar className={classes.toolbar}  sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row"
            },
            maxWidth: {
              xs: "90%",
              lg: "1150px"
            },
            left: "50%",
            transform: "translateX(-50%)"
        }}>
            <Box sx={{display:'flex'}}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={
                        {
                            flexGrow: 1,
                            marginBottom:{xs: 1, sm: 0},
                            marginRight:2
                        }
                    }>
                    <Link className={classes.titles} to='/'>Главная</Link>
                </Typography>
                <Typography
                            variant="h6" component="div" sx={{ flexGrow: 1, marginBottom:{xs: 1, sm: 0}, marginRight:2 }}>
                    <Link className={classes.titles} to='/news'>События</Link>
                </Typography>
                <Typography
                    variant="h6" component="div" sx={{ flexGrow: 1, marginBottom:{xs: 1, sm: 0},marginRight:2 }}>
                    <Link className={classes.titles} to='/volunteer'>Я волонтер</Link>
                </Typography>
                <Typography
                    variant="h6" component="div" sx={{ flexGrow: 1, marginBottom:{xs: 1, sm: 0} }}>
                    <Link className={classes.titles} to='/covid-19'>У меня ковид</Link>
                </Typography>
            </Box>
            <Box>
                <Button onClick={handleOpenModal}
                        variant="contained" color="primary"
                        sx={{width:{xs:"100%", sm:"auto"},textTransform: "none",marginRight:{xs: 0,sm: 2}, marginBottom:{xs: 1,sm: 0}}}>
                    Подписаться на рассылку
                </Button>
            </Box>

        </Toolbar>
         <ModalReg open={open} />
      </AppBar>
    </Box>
  );
}