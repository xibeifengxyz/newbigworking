import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import Home from './pages/home/home'
import Newlist from './pages/newlist/newlist'
import Search from './pages/search/search'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/newlist" element={<Newlist />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        </BrowserRouter>
    </Provider>


  
);

