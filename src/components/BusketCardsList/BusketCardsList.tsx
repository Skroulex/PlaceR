import React, { useEffect, useState } from "react";
import { IFoodItem } from "../../types/menu";
import s from './BusketCardsList.module.scss';
import BusketCard from '../BasketCard/BasketCard';

interface IBusketCards {
  list: IFoodItem[]
}

type IBusketCategory = {
  id: number
  name: string,
  items: IFoodItem[]
}

const BusketCardsList: React.FC<IBusketCards> = ({list} : IBusketCards) => {
  const [filteredList, setFilteredList] = useState<IBusketCategory[]>([]);

  useEffect(() => {
    if(list.length){
      let arr : IBusketCategory[] = [];
  
      list.forEach(item => {
        const index = arr.findIndex(i => i.name === item.subcategory.category.name);

        if(index < 0){
          return arr.push({
            id: item.id,
            name: item.subcategory.category.name,
            items: [item]
          })
        }
  
        return arr[index].items.push(item)
      })
      
      if(arr.length){
        setFilteredList(arr)
      }
    }else{
      setFilteredList([])
    }
  }, [list]);

  return(
    <ul className={s.busket__orders}>
      {filteredList.map(item => {
        return(
          <li key={item.id}>
            <h1>{item.name}</h1>
            <ul>
              {item.items.map(item => {
                return(
                  <li key={item.id}>
                    <BusketCard item={item}/>
                  </li>
                )
              })}
            </ul>
          </li>
        )
      })}
    </ul>
  )
};

export default BusketCardsList