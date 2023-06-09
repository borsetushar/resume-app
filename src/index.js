import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './State/Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(store.getState());
root.render(  
    <BrowserRouter basename='/resume-app'>
     <Provider store={store}>
         <App />
     </Provider>   
    </BrowserRouter>
);


