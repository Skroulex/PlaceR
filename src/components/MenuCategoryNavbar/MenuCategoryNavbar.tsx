import React, { useEffect, useState } from "react";
import { INavbarLinks } from "../../types/menu";
import { menuNavlinks } from "../../utils/helpers/menuNavbarExceptions";
import s from './MenuCategoryNavbar.module.scss';

interface CardsNavbar {
  currentCategory: string,
  currentSubcategory: string,
  setValue: (name: string) => void
};

const MenuCardsNavbar: React.FC<CardsNavbar> = ({currentCategory, currentSubcategory, setValue} : CardsNavbar) => {
  const [categoryNavbar, setCategoryNavbar] = useState<INavbarLinks>({id: '', name: '', subcategories: []});

  useEffect(() => {
    if(currentCategory){
      const links = menuNavlinks.find(item => item.name === currentCategory);
      
      if(links){
        setCategoryNavbar(links)
        setValue(links.subcategories[0].name)
      }else{
        setCategoryNavbar({id: '', name: '', subcategories: []})
        setValue('')
      }
    }
  }, [currentCategory, setValue]);

  return(
    <div className={s.menu__navbar}>
      {categoryNavbar && <>
        <h1>{categoryNavbar.name}</h1>
        <ul>
          {categoryNavbar.subcategories.map(item => {
            return(
              <li key={item.id}>
                <button 
                  onClick={() => setValue(item.name)} 
                  className={currentSubcategory === item.name ? s.currentCategory : ''}
                >
                  {item.name}
                </button>
              </li>
              )})}
        </ul>
      </>}
    </div>
  )
};

export default MenuCardsNavbar