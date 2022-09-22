import React, { useState } from 'react';
import './styles/index.css';
import starOn from './img/star on.png';
import starOff from './img/star off.png';
import geotag from './img/geotag.png';
import clock from './img/clock.png';
import money from './img/money.png';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';
import Vector from './img/Vector.png';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const ReservationPage = () => {
    const [value, setValue] = useState(2);

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#ff6d75',
        },
    })

    return (
        <main>
            <div className="reservation">
                <div className="reservation-wrapper">
                    <div className="reservation-wrapper-left">
                        <p className="reservation-left-title">Рекомендуемые заведения</p>
                        <div className='oblako-wrapper'>
                            <div className='block-left-oblako'>
                                <p className='reservation-left-title-second'>ОБЛАКО 53</p>
                                <div className='stars-logo'>
                                    <Box
                                        sx={{
                                            '& > legend': { mt: 2 },
                                        }}
                                    >
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </Box>
                                    {value}
                                </div>
                            </div>
                            <div className='block-right-oblako'>
                            </div>
                        </div>
                        <div className='btn-wrapper'>
                            <button className='btn first'> Панорманый вид </button>
                            <button className='btn second'> Открытая площадка </button>
                        </div>
                        <div className='description'>
                            <p className='description-text'>
                                Разнообразный и богатый опыт говорит нам,
                                что граница обучения кадров требует анализа
                                поэтапного и последовательного развития
                                общества. Как принято считать, явные
                                признаки победы институционализации,
                                инициированные исключительно синтетически.
                            </p>
                            <div className='description-wrapper'>
                                <div className='description-inner-wrapper'>
                                    <div className='item-img'>
                                        <img src={geotag} />
                                    </div>
                                    <div className='item-descr'>
                                        <p>
                                            Ул. Разакова 19, Бц. Россия
                                        </p>
                                    </div>
                                </div>
                                <div className='description-inner-wrapper'>
                                    <div className='item-img'>
                                        <img src={clock} />
                                    </div>
                                    <div className='item-descr'>
                                        <p>
                                            11:00-04:00
                                        </p>
                                    </div>
                                </div>
                                <div className='description-inner-wrapper'>
                                    <div className='item-img'>
                                        <img src={money} />
                                    </div>
                                    <div className='item-descr'>
                                        <p>
                                            Средний чек: 1000 сом
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reservation-wrapper-middle">
                        <div className='img-wrapper'>
                            <img src={img1} />
                            <div className='img-inner-wrapper'>
                                <img src={img2} />
                                <img src={img3} />
                                <img src={img4} />
                            </div>
                        </div>
                    </div>
                    <div className="reservation-wrapper-right">
                        {/* <img className='vector-img' src={Vector} /> */}
                        <div className='reservation-wrapper-right-img'>
                            <div className='right-img-container'>
                                <p>Бесплатный заказ столика</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ReservationPage;