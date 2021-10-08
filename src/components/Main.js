import {Container} from "@mui/material";
import MainPost from "./MainPost/MainPost";
const arr = [1,2,3,4,5,6,7]
const Main = () => {
    return (
        <main style={{marginTop:25}}>
            <Container maxWidth="md">

                    {
                        arr.map((item) => {
                            return(<MainPost key={item}/>)
                        })
                    }
            </Container>
        </main>
    )
}

export default Main;