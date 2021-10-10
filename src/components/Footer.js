import {AppBar, Container, Toolbar, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import {Link} from "react-router-dom";
import covidImg from '../img/covid-19.png'
const useStyles = makeStyles({
      titles:{
        textDecoration: "none",
          cursor: "pointer",
          fontWeight: "bold",
          outline:'none !important',
          color: "white"
      }
  });

const Footer = () => {
    const classes = useStyles();
    return (
        <footer>
        <AppBar position="static" sx={{backgroundColor: "#272e3d", mt: 5, height: 64}}>
            <Toolbar sx={{
              maxWidth: {
                xs: "90%",
                lg: "1150px"
              },
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              justifyContent: {
                  xs: "center",
                  sm: "start"
              }
            }}>
                <Box display="flex">
                    <Typography
                        variant="h6" component="div" sx={{ flexGrow: 1, marginRight: 2}}>
                        <Link className={classes.titles} to='/covid-19'><img style={{  height: 21,width: 24}} alt="covid-19" src={covidImg}/>Covid-19 </Link>
                    </Typography>
                    <Typography
                        variant="h6" component="div" sx={{ flexGrow: 1}}>
                        <Link className={classes.titles} to='/feedback'>Обратная связь</Link>
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
        </footer>
    )
}

export default Footer;