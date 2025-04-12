import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

// Custom toast configuration for dark mode and smaller size
const toastConfig = {
  position: 'top-right',
  duration: 3000,
  style: {
    margin:'12px',
    background: '#333',
    color: '#fff',
    padding: '8px 12px',
    fontSize: '14px',
    borderRadius: '40px',
    maxWidth: '300px',
  },
};

export const pasteSlice = createSlice({
  name: 'paste',
  initialState: {
    pastes: localStorage.getItem("pastes")
      ? JSON.parse(localStorage.getItem("pastes"))
      : []
  },
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste Created Successfully", toastConfig);
    },
    updateToPastes: (state, action) => {
      // Implement update logic here and use toastConfig
      toast.success("Paste Updated Successfully", toastConfig);
    },
    resetAllToPastes: (state, action) => {
      // Implement reset logic here and use toastConfig
      toast.success("All Pastes Reset", toastConfig);
    },
  }
})

export const { addToPastes, updateToPastes, resetAllToPastes } = pasteSlice.actions

export default pasteSlice.reducer
