import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const currencyFormatter = Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  });
  let deliveryFee = 0;
  return (
    <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{currencyFormatter.format(getTotalCartAmount())}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{currencyFormatter.format(getTotalCartAmount() === 0 ? 0 : (deliveryFee = 8000))}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{currencyFormatter.format(getTotalCartAmount() + deliveryFee)}</p>
            </div>
          </div>
          <button>Procced to payment</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
