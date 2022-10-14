import React from "react";
import s from './MenuHitsCard.module.scss';

const MenuHitsCard = () => {
  return(
    <div className={s.hits__card}>
      <header className={s.card__thumb}>
        <img src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Hits Card"/>
      </header>
      <div className={s.card__body}>
        <h2 className={s.card__suptitle}>Акция недели!</h2>
        <div className={s.card__content}>
          <h3>Паста с грибами </h3>
          <p>В целом, конечно, семантический разбор внешних противодействий обеспечивает широкому кругу</p>
          <div className={s.card__content_bottom}>
            <span>645 р.</span>
            <button>Заказать</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MenuHitsCard