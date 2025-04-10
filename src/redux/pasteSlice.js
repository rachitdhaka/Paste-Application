import { createSlice } from '@reduxjs/toolkit'

export const pasteSlice = createSlice({
  name: 'paste',
  initialState: {
    pastes:localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("paste"))
    :[]
  },
  reducers: {

    addToPastes: (state,action) => {
        
    },
    updateToPastes: (state,action) => {
        
    },
    resetAllToPastes: (state,action) => {
        
    },
    
    
    
  }
})

export const { addToPastes , updateToPastes, resetAllToPastes  } = pasteSlice.actions

export default pasteSlice.reducer