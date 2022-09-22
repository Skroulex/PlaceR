import React from 'react';
import { NavLink } from 'react-router-dom';
const MainPage = () => {
    return (
        <div>
            Hello World!
            <NavLink to="/reservationPage" > Reservation PAge</NavLink>
        </div>
    );
};

export default MainPage;
