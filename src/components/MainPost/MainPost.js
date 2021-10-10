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
        <Card sx={{ minWidth: 275, marginBottom: 5, padding: 2,borderRadius:5}}>
            <CardHeader
                sx={{fontWeight:700}}
                title="Ремонт дороги на ул.Ленина"
                subheader="Октябрь 10, 2021"
            />
            <CardContent>
                <Container>
                    <div className="content">
                        Работы на улице Ленина ведутся в рамках нацпроекта
                        «Безопасные качественные дороги». Осуществляется обновление асфальтобетонного покрытия,
                        включая укладку в межрельсовом пространстве. Для удобства пассажиров электротранспорта
                        планируется обустроить пять приподнятых остановочных платформ «венского» типа.
                        Также на 14 пешеходных переходах будет обновлено освещение. На пересечении улиц Ленина и
                        Гончарова выполнят модернизацию светофорных объектов,
                        установят новые дорожные знаки, нанесут горизонтальную дорожную разметку из термопласта.
                    </div>
                </Container>
            </CardContent>
        </Card>
    )
}
export default MainPost