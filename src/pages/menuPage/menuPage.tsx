import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setItemsInCart } from "../../store/reducers/BasketSlice";
import s from './menuPage.module.scss';
import { foods } from "../../utils/mockData/foodExceptions";
import { IFoodItem } from "../../types/menu";
import MenuCardsList from "../../components/MenuCardsList/MenuCardsList";
import MenuHitsCard from "../../components/MenuHitsCard/MenuHitscCard";
import MenuNavbar from "../../components/MenuNavbar/MenuNavbar";
import MenuCardsNavbar from "../../components/MenuCategoryNavbar/MenuCategoryNavbar";

const MenuPage = () => {
  const dispatch = useDispatch();
  const [fooditems, setFoodItems] = useState<IFoodItem[]>([]);
  const [categoryItems, setCategoryItems] = useState<IFoodItem[]>([]);
  const [categoryName, setCategotyName] = useState('');
  const [subcategory, setSubcategory] = useState('');

  const setCategory = (name: string) => {
    setCategotyName(name)
  };

  const setSubCategory = useCallback((name: string) => {
    setSubcategory(name)
  }, []);

  useEffect(() => {
    if(foods){
      setFoodItems(foods);
      setCategotyName('Горячие блюда');
      setSubcategory('Основные блюда');
    }
  }, []);

  useEffect(() => {
    const items  = fooditems.filter(item => item.subcategory.category.name === categoryName && item.subcategory.name === subcategory);

    if(items){
      setCategoryItems(items)
    }
  }, [categoryName, subcategory, fooditems]);

  const addItemtoCart = (item : IFoodItem) => {
    dispatch(setItemsInCart(item))
  };

  return(
    <div className={s.menu__page}>
      <MenuNavbar currentCategory={categoryName} setValue={setCategory}/>
      <div className={s.menu__content}>
        <MenuCardsNavbar 
          currentCategory={categoryName} 
          currentSubcategory={subcategory} 
          setValue={setSubCategory}
        />
        <MenuCardsList 
          currentCategory={subcategory} 
          category={categoryItems}
          addToCart={addItemtoCart}
        />
        <div className={s.menu__hits}>
          <h2>Хиты этого месяца</h2>
          <MenuHitsCard/>
        </div>
      </div>
    </div>
  )
};

export default MenuPage