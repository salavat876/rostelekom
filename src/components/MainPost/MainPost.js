import Paper from "@mui/material/Paper";
import {Container} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
   container:{
       width:'100%',
       display:'flex',
       justifyContent:'space-between',
       borderBottom:'1px solid #E5E5E5',
       paddingBottom:5
   },
})
const MainPost = () => {
    const classes = useStyles();
    return (
        <Paper variant="outlined" style={{padding:20,borderRadius:12,marginBottom:15}}>
            <Container className={classes.container} style={{display:'flex'}} >
                <div>
                    Категория
                </div>
                <div>
                    время
                </div>
            </Container>
            <Container style={{marginTop:15}}>
                <div className="content">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
            </Container>
        </Paper>
    )
}
export default MainPost