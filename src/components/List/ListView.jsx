import React from 'react';
import ShopItem from './ShopItem';

import './ListView.css';

export default function ListView(props) {
  return (
    <ul className="products-list">
      {props.items.map((item) => {
        return (
          <li className="products-list-item">
            <ShopItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}
