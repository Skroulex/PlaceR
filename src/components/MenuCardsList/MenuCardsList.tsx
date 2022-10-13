import React from "react";
import s from './MenuCardsList.module.scss';
import MenuCard from "../MenuCard/MenuCard";
import { IFoodItem } from "../../types/menu";

interface IListItems {
  currentCategory: string,
  category: IFoodItem[],
  addToCart: (item : IFoodItem) => void
}

const MenuCardsList: React.FC<IListItems> = ({currentCategory, category, addToCart} : IListItems) => {  
  return(
    <div className={s.list}>
      <h1>{currentCategory}</h1>
      {category.length ? 
        <ul>
          {category.map(item => {          
              return(
                <li key={item.id}>
                  <MenuCard item={item} addToCart={addToCart}/>
                </li>
              )
            })
          }
        </ul> : 
        <div className={s.menu_listEmpty}>
          <h3>Пусто</h3>
        </div>}
    </div>
  )
};

export default MenuCardsList