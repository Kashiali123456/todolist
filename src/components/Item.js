import React, { useContext } from 'react';
import ItemsContext from '../context/items-context';

const Item = ({ item }) => {
  const { itemsDispatch } = useContext(ItemsContext);
  const date = new Date();
  const showTime = date.getHours() 
      + ':' + date.getMinutes() 
      + ":" + date.getSeconds();

  return (
    <div className='bg-black rounded shadow border p-6 w-64 box-border box-content '>
      <span style={{fontSize:"25px", marginRight: "20px"}} className="text-3xl font-bold mb-4 mt-0 p-8"> {showTime}</span>
      <span className="text-3xl font-bold mb-4 mt-0 p-8" >{item}</span>
      
      <button  className="bg-red-700 hover:bg-green-500 text-white px-4 py-2 inline-block mt-1 rounded p-8"
        onClick={() =>
          itemsDispatch({ type: 'REMOVE_ITEM', itemToBeDeleted: item })
        }
        style={{backgroundColor: "red", color: "#ffffff", marginLeft: "40px"}}>  
        Delete
      </button>
      <button  className="bg-green-700 hover:bg-green-500 text-white px-4 py-2 inline-block mt-1 rounded p-8"
        onClick={() =>
          itemsDispatch({ type: 'UPDATE_ITEM', itemToBeUpdated: item })
        }
      style={{backgroundColor: "green",  color: "#ffffff", marginLeft: "20px"}}>
      Edit
      </button>
    </div>
  );
};

export { Item as default };
