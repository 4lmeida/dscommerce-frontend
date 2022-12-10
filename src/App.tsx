import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./routes/Admin";
import AdminHome from "./routes/Admin/AdminHome";
import ClientHome from "./routes/ClientHome";
import Cart from "./routes/ClientHome/Cart";
import Catalog from "./routes/ClientHome/Catalog/index.";
import Login from "./routes/ClientHome/Login";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import { ContexCartCount } from "./utils/context-cart";
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import {history} from './utils/history';

export default function App() {
  const [contexCartCount, setContexCartCount] = useState<number>(0);

  return (
    <ContexCartCount.Provider value={{ contexCartCount, setContexCartCount }}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route
              path="product-details/:productId"element={<ProductDetails />}/>
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/admin/" element={<Admin />}>
            <Route index element={<AdminHome />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HistoryRouter>
    </ContexCartCount.Provider>
  );
}
