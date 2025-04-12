import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import toast, { Toaster } from 'react-hot-toast';
import barba from '@barba/core';


import "./index.css";
import App from "./App.jsx";
import store from "./store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </StrictMode>
);
