import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateItemInCart } from "../../store/reducers/BasketSlice";
import s from './BasketCard.module.scss';
import { IFoodItem } from "../../types/menu";

interface BusketCard {
  item : IFoodItem
}

const BasketCard: React.FC <BusketCard> = ({item} : BusketCard) =>{
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(item.count);

  const counterIncrement = () => {
    setCounter((prevState) => prevState! + 1)
  };

  const counterDecrement = () => {
    if(counter === 0){return false}

    setCounter((prevState) => prevState! - 1)
  }

  useEffect(() => {
    dispatch(updateItemInCart({id: item.id, count: counter}))
  }, [counter, dispatch, item])

  return(
    <div className={s.basket__card}>
      <header className={s.card__thumb}>
        <img src={item.image} alt="Busket Card"/>
      </header>
      <div className={s.card__body}>
        <h2>{item.name}</h2>
        <p>{item.desc}</p>
        <div className={s.card__body_bottom}>
          <div className={s.basket__data}>
            <span>{item.weight} г.</span>
            <div>
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
          <span className={s.basket__price}>{item.price} р.</span>
        </div>
      </div>
    </div>
  )
};

export default BasketCard