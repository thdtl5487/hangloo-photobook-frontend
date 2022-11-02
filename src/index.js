import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import WrapComponent from './components/WrapComponent';
import { button } from 'react-bootstrap/Button';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <WrapComponent />
  </BrowserRouter>
);

