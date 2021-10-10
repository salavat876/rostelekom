import React from 'react';
import {Container, Typography} from "@mui/material";
import {Box} from "@mui/system";
const style = {
    width:'92%',
   backgroundColor:'#ffff',
    padding:20,
    borderRadius:'12px',
    boxShadow: 24,
    p: 4,
};
function CovidPage(props) {
    return (
        <Container maxWidth="lg" sx={{marginTop: "-5rem"}}>
            <Box style={style} >
                <Typography sx={{marginTop:2,paddingBottom:4,borderBottom:'1px solid #e2e6ec',color:'#18214d',fontSize:"56px"}} variant="h5">
                    Профилактика коронавируса:
                </Typography>
                <div className="advices">
                    <figure className="advice">
                        <img src="https://covid19.rosminzdrav.ru/wp-content/uploads/2020/03/advice_wash-hands.png" alt="мойте руки"/>
                        <figcaption>
                            <h3>Мойте руки</h3>
                            <p>Всегда мойте руки: когда приходите на работу или возвращаетесь домой.
                                Для профилактики также подойдут влажные салфетки или дезинфицирующие растворы.</p>
                        </figcaption>
                    </figure>
                    <figure className="advice">
                        <img src="https://covid19.rosminzdrav.ru/wp-content/uploads/2020/03/advice_dontach.png" alt="мойте руки"/>
                        <figcaption>
                            <h3>Не трогайте лицо руками</h3>
                            <p>Не подносите руки к носу и глазам.
                                Быстрее всего вирус попадает в организм через слизистую оболочку.
                                Когда чихаете всегда прикрывайтесь платком.</p>
                        </figcaption>
                    </figure>
                    <figure className="advice">
                        <img src="https://covid19.rosminzdrav.ru/wp-content/uploads/2020/03/advice_manypeoples.png" alt="мойте руки"/>
                        <figcaption>
                            <h3>Помните о необходимости соблюдать меры профилактики, как только вышли из дома</h3>
                            <p>Всегда мойте руки: когда приходите на работу или возвращаетесь домой.
                                Для профилактики также подойдут влажные салфетки или дезинфицирующие растворы.</p>
                        </figcaption>
                    </figure>
                    <figure className="advice">
                        <img src="https://covid19.rosminzdrav.ru/wp-content/uploads/2020/03/advice_stayhome.png" alt="мойте руки"/>
                        <figcaption>
                            <h3>Отмените путешествия</h3>
                            <p>На время, пока разные страны мира борются с корона вирусом, не следует путешествовать заграницу.
                                В особенности туда, где ситуация с коронавирусом крайне тяжелая.</p>
                        </figcaption>
                    </figure>
                    <figure className="advice">
                        <img src="https://covid19.rosminzdrav.ru/wp-content/uploads/2021/07/protect.jpg" alt="мойте руки"/>
                        <figcaption>
                            <h3>Вакцинируйтесь</h3>
                            <p>Вакцина – единственное надежное средство профилактики вируса.
                                Только пройдя вакцинацию мы сможем остановить передачу вируса и защитить себя от его тяжелых последствий.</p>
                        </figcaption>
                    </figure>
                </div>
                <Typography sx={{
                    display: 'block',
                    marginBottom: '54px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '56px',
                    lineHeight: '62px',
                    letterSpacing: '-2.4px',
                    color: '#18214d',}}>
                    Предупрежден – значит вооружен:
                </Typography>
                <div className="advise-footer" >
                    <p className="advice-footer_subtitle">Достоверная информация с новостями о коронавирусе размещена на сайтах Стопкоронавирус.РФ, Минздрава России, Роспотребнадзора и Всемирной организации здравоохранения.
                        Не доверяйте непроверенным источникам и не поддавайтесь панике.
                    </p>
                    <div className="inform-blocks">
                        <div className="inform-block">
                            <h3 className="inform-block-header">
                                <a href="tel:8 800 2000 112">8 800 2000 112</a>
                            </h3>
                            <p className="inform-block_content">Горячая линия Стопкоронавирус</p>
                        </div>
                        <div className="inform-block">
                            <h3 className="inform-block-header">
                                <a href="tel:8 800 2000 112">8 800 200 0 200</a>
                            </h3>
                            <p className="inform-block_content">Горячая линия Стопкоронавирус</p>
                        </div>
                        <div className="inform-block">
                            <h3 className="inform-block-header">
                                <a href="https://minzdrav.gov.ru/hotline">minzdrav.gov.ru/hotline</a>
                            </h3>
                            <p className="inform-block_content">Горячая линия Стопкоронавирус</p>
                        </div>
                    </div>
                </div>

            </Box>

        </Container>
    );
}

export default CovidPage;