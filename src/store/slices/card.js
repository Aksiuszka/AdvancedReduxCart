import { createSlice } from '@reduxjs/toolkit';
const cardSlice = createSlice({
  name: 'card',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    increment(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(singleItem => singleItem.id === item.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: item.id,
          price: item.price,
          quantity: 1,
          totalPrice: item.price,
          name: item.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + item.price;
      }
    },
    decrement(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find(singleItem => singleItem.id === itemId);
      state.totalQuantity--;
      if (existingItem === 1) {
        state.items.filter(singleItem => singleItem.id !== itemId);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});
export const { reducer: cardReducer, actions: cardActions } = cardSlice;
