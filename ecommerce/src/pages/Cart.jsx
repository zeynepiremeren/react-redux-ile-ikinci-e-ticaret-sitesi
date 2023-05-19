import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../redux/cartSlice';
import CartComp from '../components/cart/CartComp';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount, "cardssss");

  useEffect(() => {
    dispatch(getCartTotal(carts));
  }, [dispatch, carts]);

  const increment = () => {
    // Artırma işlemi
    dispatch(getCartTotal(carts)); // totalAmount'ın güncellenmesi
  };

  return (
    <div>
      {carts.length > 0 ? (
        <div>
          {carts.map((cart, i) => (
            <CartComp key={i} cart={cart} increment={increment} />
          ))}
          <div>
            TOPLAM TUTAR: <span>{totalAmount} TL</span>
          </div>
        </div>
      ) : (
        <div>Sepette Ürün Yok</div>
      )}
    </div>
  );
};

export default Cart;
