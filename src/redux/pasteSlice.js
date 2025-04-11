import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

export const pasteSlice = createSlice({
  name: 'paste',
  initialState: {
    pastes:localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    :[]
  },
  reducers: {

    addToPastes: (state,action) => {
        const paste =action.payload;
        state.pastes.push(paste);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast("Paste Created Successfully");



    },
    updateToPastes: (state,action) => {
        
    },
    resetAllToPastes: (state,action) => {
        
    },
    
    
    
  }
})

export const { addToPastes , updateToPastes, resetAllToPastes  } = pasteSlice.actions

export default pasteSlice.reducer