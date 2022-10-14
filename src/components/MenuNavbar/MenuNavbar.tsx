import React from "react";
import s from './MenuNavbar.module.scss';
import { Link } from "react-router-dom";

import dishes from '../../assets/menuPage/dishes.svg';
import salad from '../../assets/menuPage/salad.svg';
import basket from '../../assets/menuPage/basket.svg';
import dessert from '../../assets/menuPage/dessert.svg';
import drinks from '../../assets/menuPage/drinks.svg';

interface IMenuNavbar {
  currentCategory: string,
  setValue : (name: string) => void
}

const MenuNavbar : React.FC <IMenuNavbar> = ({currentCategory, setValue} : IMenuNavbar) => {
  return(
    <div className={s.menu__navbar}>
      <ul>
        <li>
          <button 
            className={`${s.dishes_button} ${currentCategory === 'Горячие блюда' ? s.currentCategory : ''}`} 
            onClick={() => setValue('Горячие блюда')}
          >
            <img src={dishes} alt="Hot Dishes Icon" />
          </button>
        </li>
        <li>
          <button 
            className={`${s.salad_button} ${currentCategory === 'Салаты' ? s.currentCategory : ''}`} 
            onClick={() => setValue('Салаты')}
          >
            <img src={salad} alt="Salads Icon" />
          </button>
        </li>
        <li>
          <Link to={'/busket'} className={s.busket_button}>
            <img src={basket} alt="Menu Busket Icon" />
          </Link>
        </li>
        <li>
          <button 
            className={`${s.drinks_button} ${currentCategory === 'Напитки' ? s.currentCategory : ''}`} 
            onClick={() => setValue('Напитки')}
          >
            <img src={drinks} alt="Drinks Icon" />
          </button>
        </li>
        <li>
          <button 
            className={`${s.dessert_button} ${currentCategory === 'Десерты' ? s.currentCategory : ''}`} 
            onClick={() => setValue('Десерты')} 
          >
            <img src={dessert} alt="Desserts Icon" />
          </button>
        </li>
      </ul>
    </div>
  )
};

export default MenuNavbar