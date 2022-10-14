import React from "react";
import s from './busketPage.module.scss';
import { useSelector } from "react-redux";
import BusketCashReciept from "../../components/BusketCashReciept/BusketCashReciept";
import BusketCardsList from "../../components/BusketCardsList/BusketCardsList";
import { RootState } from "../../store";

const BusketPage = () => {
  const basketState = useSelector((state : RootState) => state.BasketSlice)

  return(
    <div className={s.busket__page}>
      {basketState.cartItems.length ? 
        <>
          <div className={s.busket__page_content}>
            <div className={s.busket__page_orders}>
              <h1>Ваши заказы</h1>
              <BusketCardsList list={basketState.cartItems}/>
            </div>
            <BusketCashReciept/>
          </div>
        </> : <div className={s.busket__page_empty_busket}>Ваша корзина пуста</div>}
    </div>
  )
};

export default BusketPage