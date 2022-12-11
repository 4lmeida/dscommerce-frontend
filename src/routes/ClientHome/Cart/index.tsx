import "./styles.css";
import * as cartService from "../../../services/cart-service";
import * as orderService from '../../../services/order-service';
import { OrderDTO } from "../../../models/order";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContexCartCount } from "../../../utils/context-cart";


export default function Cart() {
  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

  const { setContexCartCount } = useContext(ContexCartCount);

  const navigate = useNavigate();

  function handleClearClick() {
    cartService.clearCart();
    updateCart();
  }


  function handleIncreaseItem(productId: number) {
    cartService.increaseItem(productId);
    setCart(cartService.getCart());
  }

  function handleDencreaseItem(productId: number) {
    cartService.dencreaseItem(productId);
    updateCart();
  }

  function updateCart() {
    const newCart = cartService.getCart();
    setCart(newCart);
    setContexCartCount(newCart.items.length);
  }

  function  handlePlaceOrderClick() {
      orderService.placeOrderRequest(cart)
        .then(response => {
            cartService.clearCart();
            setContexCartCount(0);
            navigate(`/confirmation/${response.data.id}`);
        })
  }

  return (
    <main>
      <section id="cart-container-section" className="dsc-container">
        {cart.items.length === 0 ? (
          <div>
            <h2 className="dsc-selection-title dsc-mb20 ">
              Seu carrinho está vazio
            </h2>
          </div>
        ) : (
          <div className="dsc-card dsc-mb20 ">
            {cart.items.map((item) => (
              <div
                key={item.productId}
                className="dsc-cart-item-container dsc-line-bottom"
              >
                <div className="dsc-cart-item-left">
                  <img src={item.imgUrl} alt={item.name} />
                  <div className="dsc-cart-item-description">
                    <h3>{item.name}</h3>
                    <div className="dsc-cart-item-quantity-container">
                      <div onClick={() => handleDencreaseItem(item.productId)} className="dsc-cart-item-quantity-btn">-</div>
                      <p>{item.quantity}</p>
                      <div onClick={() => handleIncreaseItem(item.productId)} className="dsc-cart-item-quantity-btn">+</div>
                    </div>
                  </div>
                </div>
                <div className="dsc-cart-item-right">
                  R$ {item.subTotal.toFixed(2)}
                </div>
              </div>
            ))}

            <div className="dsc-cart-total-container">
              <h3>R$ {cart.total.toFixed(2)}</h3>
            </div>
          </div>
        )}

        <div className="dsc-btn-page-container">
          <div onClick={handlePlaceOrderClick} className="dsc-btn dsc-btn-blue">Finaliza pedido</div>
          <Link to="/catalog">
            <div className="dsc-btn dsc-btn-white">Continuar comprando</div>
          </Link>
          <div onClick={handleClearClick} className="dsc-btn dsc-btn-white">Limpar carrinho</div>
        </div>
      </section>
    </main>
  );
}
