import React, { useState } from 'react';
import './styles/index.css';
import './styles/media.css';
import geotag from './img/geotag.png';
import clock from './img/clock.png';
import money from './img/money.png';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import TextField from '@mui/material/TextField';


const ReservationPage = () => {
    const [value, setValue] = useState(2); // Рейтинг заведения

    const [nameInstitution, setInstitution] = useState('');
    const [date, setDate] = useState('')
    const [time, setTime] = useState('');
    const [count, setCount] = useState('');
    const [table, setTable] = useState('');

    const handleChangeNameInstitution = (event) => {
        setInstitution(event.target.value);
    };

    const handleChangeDate = (event) => {
        setDate(event.target.value);
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


    const listOfObject = [
        {
            name: 'ОБЛАКО 53',
            nameOfStreet: 'Ул. Разакова 19, Бц. Россия',
            time: '11:00-04:00',
            value: 1000,
            description: `Разнообразный и богатый опыт говорит нам, 
            что граница обучения кадров требует анализа поэтапного и последовательного развития общества. 
            Как принято считать, явные признаки победы институционализации, инициированные исключительно синтетически.`,
            ListOfImg: [
                {
                    img: '/static/media/img1.06635facbb48ad0ba92c.png',
                },
                {
                    img: '/static/media/img2.3d88847920de6d11fcd4.png',
                },
                {
                    img: '/static/media/img3.a37560db83103d697d7d.png',
                },
                {
                    img: '/static/media/img4.876cb47e1abe7fadbee2.png'
                }
            ]
        }
    ]




    return (
        <main>
            <div className="reservation">
                <div className="reservation-wrapper">
                    <div className="reservation-wrapper-left">
                        <p className="reservation-left-title">Рекомендуемые заведения</p>
                        <div className='oblako-wrapper'>
                            <div className='block-left-oblako'>
                                <p className='reservation-left-title-second'>{listOfObject[0].name}</p>
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
                                {listOfObject[0].description}
                            </p>
                            <div className='description-wrapper'>
                                <div className='description-inner-wrapper'>
                                    <div className='item-img'>
                                        <img src={geotag} />
                                    </div>
                                    <div className='item-descr'>
                                        <p>
                                            {listOfObject[0].nameOfStreet}
                                        </p>
                                    </div>
                                </div>
                                <div className='description-inner-wrapper'>
                                    <div className='item-img'>
                                        <img src={clock} />
                                    </div>
                                    <div className='item-descr'>
                                        <p>
                                            {listOfObject[0].time}
                                        </p>
                                    </div>
                                </div>
                                <div className='description-inner-wrapper'>
                                    <div className='item-img'>
                                        <img src={money} />
                                    </div>
                                    <div className='item-descr'>
                                        <p>
                                            Средний чек: {listOfObject[0].value} сом
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reservation-wrapper-middle">
                        <div className='img-wrapper'>
                            <img src={listOfObject[0].ListOfImg[0].img} />
                            <div className='img-inner-wrapper'>
                                <img src={listOfObject[0].ListOfImg[1].img} />
                                <img src={listOfObject[0].ListOfImg[2].img} />
                                <img src={listOfObject[0].ListOfImg[3].img} />
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
                                                    В заведении Облако 53
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className='select-wrapper-date-time'>
                                            <FormControl className='select-date' sx={{ m: 1, minWidth: 120 }}>
                                                <TextField
                                                    id="date"
                                                    type="date"
                                                    defaultValue= "2022-09-25"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </FormControl>
                                        <FormControl className='select-time' sx={{ m: 1, minWidth: 120 }}>
                                            <TextField
                                                id="time"
                                                type="time"
                                                defaultValue="07:30"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                            />
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
                                                    03
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
                                                    Столик B1
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