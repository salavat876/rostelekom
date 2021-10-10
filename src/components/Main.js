import {Container} from "@mui/material";
import MainPost from "./MainPost/MainPost";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Link} from "react-router-dom";
const arr = [1,2,3,4,5,6,7]
const Main = () => {
    return (
        <>
            <Container maxWidth="lg">
               <Link to="/" style={{
                   position: 'fixed',
                   display: 'flex',
                   color: 'black',
                   textDecoration: 'none'}}><ArrowBackIosIcon/><span>Назад</span> </Link>
            </Container>
            <Container maxWidth="md">
                <MainPost />
            </Container>
        </>
    )
}

export default Main;