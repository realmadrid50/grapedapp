import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import '../src/Components/Navbar/Navbar.css';
import Navbar from '../src/Components/Navbar/Navbar.js';
import Stake from '../src/Components/Stake/Stake.js';
import '../src/Components/Stake/Stake.css';
import Wrap from '../src/Components/Wrap/Wrap.js';
import Bond from '../src/Components/Bond/Bond.js';
import Nav from '../src/Components/Nav/Nav.js';
import Main from '../src/Components/Main/Main.js';
import Discount from '../src/Components/Discount/Discount.js';
import Header from '../src/Components/Header/Header.js';
import Discount2 from '../src/Components/Discount2/Discount2.js';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Nav />
      <Navbar />
      <Header />
      <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/wrap" element={<Wrap />} />
          <Route exact path="/usdc" element={<Discount />} />
          <Route exact path="/usdc_snow_lp" element={<Discount2 />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/bond" element={<Bond />} />
      </Routes>

    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
