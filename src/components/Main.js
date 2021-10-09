import {Container} from "@mui/material";
import MainPost from "./MainPost/MainPost";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const arr = [1,2,3,4,5,6,7]
const Main = () => {
    return (
        <>

            <Container maxWidth="lg">
                <ArrowBackIosIcon/>
            </Container>

            <Container maxWidth="md">
                    {
                        arr.map((item) => {
                            return(<MainPost key={item}/>)
                        })
                    }
            </Container>
        </>
    )
}

export default Main;