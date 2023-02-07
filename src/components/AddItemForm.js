import React, { useContext, useState } from 'react';
import ItemsContext from '../context/items-context';

const AddItemForm = () => {
  const [item, setItem] = useState('');
  const { itemsDispatch } = useContext(ItemsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // assuming no duplicates for demo purposes
    itemsDispatch({ type: 'ADD_ITEM', item });
    setItem('');
  };

  return (
    <div className='container mx-auto px-4  md:mx-auto '>
      <p>Add item</p>
      <form onSubmit={handleSubmit} >
        <input value={item} onChange={(e) => setItem(e.target.value)}  style={{border: "none"}}  className=" bg-green-700 hover:bg-green-400 text-black px-4 py-2 inline-block mt-4 rounded border-none text-pink-500 float-left object-fill" />
        <button  className="bg-green-700 hover:bg-green-400 text-black px-4 py-2 inline-block mt-4 rounded float-right object-fill object-right">Add Item</button>
      </form>
    </div>
  );
};

export { AddItemForm as default };
