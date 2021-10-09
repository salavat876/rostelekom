import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import {Alert, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Modal, TextField} from "@mui/material";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {useState} from "react";
import axios from "axios";
import {API_KEY} from "../consts";
import ModalReg from "./ModalReg/ModalReg";
import {useDispatch, useSelector} from "react-redux";
import {modalWindowAction, openModalVolunteer, openVolunteer} from "../redux/actions/modalWindowAction";
import ModalVolunteer from "./ModalVolunteer/ModalVolunteer";

const useStyles = makeStyles({
  toolbar: {
    backgroundColor: "white",
    color: 'Black',
    
  },
});
const style = {
    position: 'absolute',
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
    const handleOpenVolunteer = () => {
        dispatch(openModalVolunteer())
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static" style={{backgroundColor:'#ffff'}} >
        <Toolbar className={classes.toolbar}  sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row"
            },
            width: "80%!important",
            left: "50%",
            transform: "translateX(-50%)"
        }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginBottom:{xs: 1, sm: 0} }}>
            Домой
          </Typography>
          <Button onClick={handleOpenModal}  variant="contained" color="primary" sx={{width:{xs:"100%", sm:"auto"},textTransform: "none",marginRight:{xs: 0,sm: 2}, marginBottom:{xs: 1,sm: 0}}}>Подписаться на рассылку</Button>
            <Button onClick={handleOpenVolunteer} variant="contained" sx={{width:{xs:"100%", sm:"auto"},textTransform: "none", backgroundColor:'#f82020', marginBottom:{xs: 2,sm: 0}}}>Стать волонтером</Button>
        </Toolbar>
         <ModalReg open={open} />
          <ModalVolunteer open={openVolunteer}/>
      </AppBar>
    </Box>
  );
}