import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Main} from "./pages/Main/Main";
import {Cart} from "./pages/Cart/Cart";
import {Favorite} from "./pages/Favorite/Favorite";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
