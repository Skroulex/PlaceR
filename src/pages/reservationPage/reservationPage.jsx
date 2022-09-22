import React, { useState } from 'react';
import './styles/index.css';
import geotag from './img/geotag.png';
import clock from './img/clock.png';
import money from './img/money.png';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const ReservationPage = () => {
    const [value, setValue] = useState(2);

    const [nameInstitution, setInstitution] = useState('');
    const [date, setData] = useState('');
    const [time, setTime] = useState('');
    const [count, setCount] = useState(0);
    const [table, setTable] = useState('');


    const handleChangeNameInstitution = (event) => {
        setInstitution(event.target.value);
    };

    const handleChangeDate = (event) => {
        setData(event.target.value);
    };

    const handleChangeTime = (event) => {
        setTime(event.target.value);
    };

    const handleChangeCount = (event) => {
        setCount(event.target.value);
    };

    const handleChangeTable = (event) => {
        setTable(event.target.value);
    };

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
                        <div className='reservation-wrapper-right-img'>
                            <div className='right-img-container'>
                                <p>Бесплатный заказ столика</p>
                                <div className='select-wrapper'>
                                    <div className='select-wrapper-institution'>
                                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                            <Select
                                                value={nameInstitution}
                                                onChange={handleChangeNameInstitution}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                    <em>В заведении Облако 53</em>
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className='select-wrapper-date-time'>
                                        <FormControl className='select-date' sx={{ m: 1, minWidth: 120 }}>
                                            <Select
                                                value={date}
                                                onChange={handleChangeDate}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                    <em>12.06.2022</em>
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl className='select-time' sx={{ m: 1, minWidth: 120 }}>
                                            <Select
                                                value={time}
                                                onChange={handleChangeTime}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                    <em> 18:00</em>
                                                </MenuItem>
                                                <MenuItem value={2}>
                                                    <em> 18:30</em>
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className='select-wrapper-count-table'>
                                        <FormControl className='select-count' sx={{ m: 1, minWidth: 120 }}>
                                            <Select
                                                value={count}
                                                onChange={handleChangeCount}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                    <em>03</em>
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl className='select-table' sx={{ m: 1, minWidth: 120 }}>
                                            <Select
                                                value={table}
                                                onChange={handleChangeTable}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                    <em>Столик B1</em>
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className='select-wrapper-btn-reservation'>
                                        <button className='btn-reservation'> Забронировать столик </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ReservationPage;