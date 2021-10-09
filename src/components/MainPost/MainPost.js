import {Button, Card, CardActions, CardContent, CardHeader, Container} from "@mui/material";
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
        <Card sx={{ minWidth: 275, marginBottom: 5, padding: 2}}>
            <CardHeader
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Container>
                    <div className="content">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </div>
                </Container>
            </CardContent>
            <CardActions>
                <Button size="small">Узнать больше</Button>
            </CardActions>
        </Card>
    )
}
export default MainPost