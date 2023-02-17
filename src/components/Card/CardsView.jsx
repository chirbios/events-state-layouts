import React from 'react';
import ShopCard from './ShopCard';

import './CardsView.css';

export default function CardsView(props) {
  return (
    <ul className="products-card">
      {props.cards.map((card) => {
        return (
          <li className="products-list-item">
            <ShopCard card={card} />
          </li>
        );
      })}
    </ul>
  );
}
