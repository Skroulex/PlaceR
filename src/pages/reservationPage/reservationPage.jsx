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
                    img: 'https://s3-alpha-sig.figma.com/img/bf21/e8fa/f5d825ba65d671c56b1644a56a81974d?Expires=1665360000&Signature=KjktAUwG8wlVPnn1PZosWrKeUEpdpwnWAGGMBIBEd5OPzIJCN~fzX9PXSFfUSLNsEszb4vIaRv-3UiQUR7rVu3Pplp5-0JGGK9WnyOZHLX~1Sh6qxhfRf992jxPwIDaB8-GqS4Lxo44fLhSC785WdpsF-1gmcabEjLIBtO3ThD4IRqPDK7OLRDqN1~YhpjU475FoDGlG9plWc1~PW0ZADNSzXDufh2IgycLPLnAqumrj-zondsMByFzDV-uasXE6YYoQcQr6he7fcjWUm6AYu-5er~pXgjE0YnHbz7CqmyqAxEnlmZJN6hkeNRDRiQlExbQV7Esj5sBB9yzb6q2aIg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                },
                {
                    img: 'https://s3-alpha-sig.figma.com/img/74b2/9023/7e6179c2a6cc2ebf90c17b4d1a415bc0?Expires=1665360000&Signature=B3~C1BXld904rjtiR74dMm8K8L6JuK7hXZSDK41QJqXx6Y~wb6In9ZWTbHYQ39U6HWa1BnDhgzaqbkhu3VQI-4u-mty8HCEzB10saXwZkW6kWPU0zbyuPbFrmcrD685OvE04aWc93Dh9WAFLcKfs255eDdMqbtjR-xvsCCRf2L4BHOIkJIMdy66ZxzzeAyUqj2cxeZRLGB92JBt9oz7ONjjZ~lyQ8ljoDXAreeitNfZixH15ZKArBPO08qbdLSPxwaXqAcG70legbUO6GtwIEz97Iarq1ZXe0P7hlhf4tZbJAZy~2hrfpOeasO4csB~yv376qT56gK6iOvfvikSCOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                },
                {
                    img: 'https://s3-alpha-sig.figma.com/img/8d5e/468f/7382975558500f803f2c45a36f605fd6?Expires=1665360000&Signature=bLouIu9drNvptEIKGHY5YRNia-oGnvghQCS4liBcLFVQGNL5b9BlzLY2nNrZJ-rMtGbJ5Qax0awardqwKkhE0~coWgr3rf7QBAt~W1Q~95qrSwyPKD3599N3ZTj-QWju1d94NSbJFxSJv-CJ-r5lRKogtgiUScjjmvvjqC5B6E5kIax5-qzI~5SJ8392luxVs7h3OZOkqx4ThVax0v825byajpi~tPBykTkIp7r-BvQvXoqQj9U9kAWjgEZsLc4nuNgvA02ZABSFGt2IThtvLqRRFVUeIUjlddnvGojGQa5V-TnRzScc20qjbZQlr8TF6WOWLmM6p5Lks5mbUZ2g6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                },
                {
                    img: 'https://s3-alpha-sig.figma.com/img/b25a/afa9/4564eb20e1d306e3790ead9329f7faee?Expires=1665360000&Signature=LPlDqHtONJ5LAdPltup7Su27VyvTxq6-SUPvAN6JFE52uxQ2L8Gumjxdr0F824vcEVN9rqu-gojBRNgYDUkRKuRltAztwJQeE6CdoHQYeObLmL7vn0FcvZdkJXMw38mMBe802Zc7UjUt92F4v9LTPhrz6H9rwDpnECUeyJzbbn6d1Uyfhvd8ByLo1Wt1C5iGin6srQYzTN4ziT1Bm2aQ5nd2msl1SjZ~fi7QwN6o55C-FfMtmBK59s8Jn0L1nF9H3JQtGhdkbjpb76sCQ4YQvOvfDgkkD12NC9GCwtMQZqfOrCMrrRyetQHAoEGGSTXhSg3tSC-GLdUdb-fOFxQMxQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
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
                            <img className='img-1' src={listOfObject[0].ListOfImg[0].img} />
                            <div className='img-inner-wrapper'>
                                <img className='img-2' src={listOfObject[0].ListOfImg[1].img} />
                                <img className='img-3' src={listOfObject[0].ListOfImg[2].img} />
                                <img className='img-4' src={listOfObject[0].ListOfImg[3].img} />
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