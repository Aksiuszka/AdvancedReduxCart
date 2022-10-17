import { createSlice } from '@reduxjs/toolkit';
 const uiSlice = createSlice({
  name:'ui',
  initialState:{
    isVisible: false
  },
  reducers:{
    toggle(state, _){
      state.isVisible=!state.isVisible
    }
  }
})
export const { reducer: uiReducer, actions: uiActions}= uiSlice