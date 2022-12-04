import "./styles.css";
import cartIcon from "../../assets/cart.svg";
import { useContext, useState } from "react";
import * as cartService from '../../services/cart-service';
import { ContexCartCount } from "../../utils/context-cart";

export default function CartIcon() {

    const {contexCartCount } = useContext(ContexCartCount);

  return (
    <>
      <img src={cartIcon} alt="Carrinho de compras" />
      {
        contexCartCount > 0 &&
        <div className="dsc-cart-count">{contexCartCount}</div>
      }
      
    </>
  );
}
