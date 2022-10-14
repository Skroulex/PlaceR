import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IFoodItem } from "../../types/menu";
import s from './MenuCard.module.scss';

interface ICardItem {
  item: IFoodItem,
  addToCart: (item : IFoodItem) => void
}

const MenuCard: React.FC <ICardItem> = ({item, addToCart} : ICardItem) => {
  const basketItems = useSelector((state : RootState) => state.BasketSlice);
  const [counter, setCounter] = useState(0);

  const includes = basketItems.cartItems.some(i => i.id === item.id);

  const counterIncrement = () => {
    setCounter((prevState) => prevState + 1)
  };

  const counterDecrement = () => {
    if(counter === 0){return false}

    setCounter((prevState) => prevState - 1)
  }

  const setCartItem = () => {
    const cartItem = {
      ...item,
      count: counter === 0 ? 1 : counter
    };

    addToCart(cartItem)
  }

  return(
    <div className={`${s.menu__card} ${includes ? s.card_disabled : ''}`}>
      <header className={s.card__thumb}>
        <img src={item.image} alt="Menu Card"/>
      </header>
      <div className={s.card__body}>
        <h2 className={s.card__title}>{item.name}</h2>
        <div className={s.card__description}>
          <p>{item.desc}</p>
          <div className={s.desc__bottom}>
            <span>{item.weight} г.</span>
            <div className={s.desc_buttons}>
              <button onClick={counterDecrement}>
                <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L10 1" stroke="#FFAA5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <span>{counter}</span>
              <button onClick={counterIncrement}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1V9" stroke="#FFAA5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 5L9 5" stroke="#FFAA5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className={s.card__footer}>
        <span>{item.price} р.</span>
        <button onClick={setCartItem} disabled={includes}>{includes ? 'В корзине' : 'Заказать'}</button>
      </footer>
    </div>
  )
};

export default MenuCard