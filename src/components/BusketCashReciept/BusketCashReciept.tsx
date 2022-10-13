import React, { useEffect, useState } from "react";
import s from './BusketCashReciept.module.scss';
import {useSelector} from 'react-redux';
import { RootState } from "../../store";

interface IRecieptList {
  name: string,
  price: number
}

const BusketCashReciept = () => {
  const [recieptItems, setRecieptItems] = useState<IRecieptList[]>([]);
  const BasketSlice = useSelector((state : RootState) => state.BasketSlice);

  useEffect(() => {
    if(BasketSlice.cartItems.length){
      setRecieptItems(BasketSlice.cartItems.map(item => ({name: item.name, price: item.count! * item.price})))
    }else{
      setRecieptItems([])
    }
  }, [BasketSlice])

  const alertCart = () => {
    alert(JSON.stringify(BasketSlice))
  }

  return(
    <div className={s.busket__cash}>
      <h1>Ваш заказ:</h1>
        <div className={s.busket__cash_list}>
        <ol>
          {recieptItems.map((item , i)=> {
            return(
              <li key={i}>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.price} р.</span>
                </div>
              </li>
            )
          })}
        </ol>
        <hr />
        <div className={s.busket__cash_totalPrice}>
          <h5>Сумма заказа:</h5>
          <span>{BasketSlice.totalPrice} р.</span>
        </div>
        <div className={s.busket__cash_bottomButton}>
          <button onClick={alertCart}>Сделать предзаказ</button>
        </div>
      </div>
    </div>
  )
};

export default BusketCashReciept