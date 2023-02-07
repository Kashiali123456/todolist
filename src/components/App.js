import React, { useEffect, useReducer } from 'react';
import ItemsContext from '../context/items-context';
import itemsReducer from '../reducers/items';
import AddItemForm from './AddItemForm';
import './App.css';
import ItemList from './ItemList';

function App() {

  const [items, itemsDispatch] = useReducer(itemsReducer, []);

  const todayNew = new Date();
  const todayDay = todayNew.getDay();
  const todayDate = todayNew.getDate();
  const todayMonth = todayNew.getMonth();
  const todayYear = todayNew.getFullYear();

  let todayDayStr = '';
  switch (todayDay) {
    case 0:
      todayDayStr = 'Sunday';
      break;
    case 1:
      todayDayStr = 'Monday';
      break;
    case 2:
      todayDayStr = 'Tuesday';
      break;
    case 3:
      todayDayStr = 'Wednesday';
      break;
    case 4:
      todayDayStr = 'Thursday';
      break;
    case 5:
      todayDayStr = 'Friday';
      break;
    case 6:
      todayDayStr = 'Satursday';
      break;
    default:
      break;
  }
  let todayMonthStr = '';
  switch (todayMonth) {
    case 0:
      todayMonthStr = 'Jan';
      break;
    case 1:
      todayMonthStr = 'Feb';
      break;
    case 2:
      todayMonthStr = 'Mar';
      break;
    case 3:
      todayMonthStr = 'Apr';
      break;
    case 4:
      todayMonthStr = 'May';
      break;
    case 5:
      todayMonthStr = 'Jun';
      break;
    case 6:
      todayMonthStr = 'Jul';
      break;
    case 7:
      todayMonthStr = 'Aug';
      break;
    case 8:
      todayMonthStr = 'Sep';
      break;
    case 9:
      todayMonthStr = 'Oct';
      break;
    case 10:
      todayMonthStr = 'Nov';
      break;
    case 11:
      todayMonthStr = 'Dec';
      break;
    default:
      break;
  }


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      itemsDispatch({ type: 'POPULATE_ITEMS', items });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
  return (
    <ItemsContext.Provider value={{ items, itemsDispatch }}>
      <div className="App columns-4">
        <header className="App-header">
          To Do items
          <div className="App">
            <h3 className="appTitle">{`${todayDayStr} ${todayMonthStr} ${todayDate}, ${todayYear}`}</h3>
          </div>
          <AddItemForm />
          <ItemList />
          {/* <h1 align="center">Current Time</h1>
            <h2 align="center"> {showTime}</h2> */}
        </header>
      </div>
    </ItemsContext.Provider>
  );
}
export default App;
