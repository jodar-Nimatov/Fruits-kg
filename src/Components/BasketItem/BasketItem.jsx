import React from 'react';
import './BasketItem.scss';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../../features/cartSlice';
import image from '../../assets/images/Rectangle 1.png';

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();

  const increaseKillos = () => {
    const newQuantity = item.quantity + 1;
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  const decreaseKillos = () => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  return (
    <div className='BasketItem'>
      <div className="BasketItem-inner">
        <section>
          <img src={item.image || image} alt="IMG" />
          <h3>{item.name}</h3>
        </section>
        <div>
          <section className='s1'>
            <button onClick={decreaseKillos}>-</button>
            <h4>{item.quantity} Kg</h4>
            <button onClick={increaseKillos}>+</button>
          </section>
          <section>
            <p>{item.price * item.quantity} ⃀</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
