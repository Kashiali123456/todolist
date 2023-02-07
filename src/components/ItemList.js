import React, { useContext } from 'react';
import ItemsContext from '../context/items-context';
import Item from './Item';
const ItemList = () => {
  const { items } = useContext(ItemsContext);

  console.log(items);
  return (
    <div className="items-container columns-4">
      <ul style={{ marginLeft: "20px", listStyle: "none" }}>
        {items.map((item) => (
          <li>
            <Item key={item.id} item={item}  />
          </li>
        ))}
      </ul>
    </div>
  );
};
export { ItemList as default };
