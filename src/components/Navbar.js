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
import ModalReg from './ModalReg/ModalReg';

const useStyles = makeStyles({
  toolbar: {
    backgroundColor: "white",
    color: 'Black',
    
  },
});

export default function NavBar() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
          <ModalReg open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"/>
      </AppBar>
    </Box>
  );
}