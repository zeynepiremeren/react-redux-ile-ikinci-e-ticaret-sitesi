import React, { useState } from 'react';
import { removeFromCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

const CartComp = ({ cart }) => {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(cart.price);
  const dispatch = useDispatch();
 

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setPrice(price - cart.price);
      
    }
  };

  const increment = () => {
    if (quantity < 9) {
      setQuantity(quantity + 1);
      setPrice(price + cart.price);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', border: '1px solid lightGray', margin: '50px',width:"1500px",height:"270px" }}>
        <img
          style={{ width: '150px', height: '100px', backgroundColor: 'white', marginTop: '30px', padding: '70px' }}
          src={cart.image}
          alt=""
        />
       <h2>{cart.title} </h2>
        <div
          style={{
            position: 'relative',
            top: '60px',
            left: '30px',
            fontSize: '32px',
            fontWeight: 'lighter',
            width: '720px',
            color: '#757575',
          }}
        >
          {cart?.description}
        </div>

        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              position: 'relative',
              top: '60px',
              left: '250px',
              fontSize: '32px',
              fontWeight: 'lighter',
              width: '720px',
              color: '#757575',
            }}
          >
            {price} TL
          </div>
          <div
          onClick={()=> dispatch(removeFromCart(cart.id))}
           style={{
           display: 'flex',
           width: '200px',
           backgroundColor: '#FF6F00',
           height: '50px',
           color: 'white',
           alignItems: 'center',
           justifyContent: 'center',
           borderRadius: '4px',
           position: 'relative',
           left: '120px'
           }}>Ürünü Sil</div>

          <div
            style={{
              position: 'relative',
              top: '150px',
              right:"670px",
              backgroundColor: '#FF6F00',
              color: 'white',
              width: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '45px',
              borderRadius: '4px',
            }}
          >
            <div onClick={decrement} style={{ padding: '5px' }}>
              -
            </div>
            <span style={{ padding: '10px', width: '8px', border: 'none', color: 'none' }}>{quantity}</span>
            <div onClick={increment} style={{ padding: '5px' }}>
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
