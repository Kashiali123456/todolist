const itemsReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_ITEMS':
      return action.items;
    case 'ADD_ITEM':
      return [...state, action.item];
    case 'REMOVE_ITEM':
      return state.filter((item) => item !== action.itemToBeDeleted);
      case 'UPDATE_ITEM':
      return state.filter((item) => item === action.itemToBeUpdated);
    default:

      return state;
  }
};

export { itemsReducer as default };
