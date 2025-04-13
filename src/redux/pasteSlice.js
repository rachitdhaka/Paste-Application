import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

// Custom toast configuration for dark mode and smaller size
const toastConfig = {
  position: 'top-right',
  duration: 3000,
  style: {
    margin: '12px',
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
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id)
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes))
        toast.success("Paste Updated Successfully", toastConfig);
      }

    },
    resetAllToPastes: (state, action) => {
      state.pastes = []
      localStorage.removeItem("pastes")
      toast.success("All Pastes Reset", toastConfig);
    },
  }
})

export const { addToPastes, updateToPastes, resetAllToPastes } = pasteSlice.actions

export default pasteSlice.reducer
