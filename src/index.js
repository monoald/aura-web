import React from "react";
import * as ReactDOMClient from 'react-dom/client'
import App from "./routes/App";
import { BrowserRouter } from 'react-router-dom';

const root  = ReactDOMClient.createRoot(
  document.getElementById('root')
);

root.render(
  <BrowserRouter basename='/real-estate-web'> 
    <App />
  </BrowserRouter>
)