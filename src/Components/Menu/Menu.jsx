import React, { useEffect, useState } from 'react';
import './Menu.scss';
import MenuHeader from '../MenuHeader/MenuHeader';
import ItemCard from '../ItemCard/ItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/productsSlice';

const Menu = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);
  const products = useSelector((state) => state.products.items);
  const error = useSelector((state) => state.products.error);
  
  const [categs, setCategs] = useState(1);
  const categories = ['Все', 'Фрукты', 'Овощи'];
  
  const removeDuplicates = (array) => {
    const uniqueIds = new Set();
    return array.filter(item => {
      if (uniqueIds.has(item.id)) {
        return false;
      } else {
        uniqueIds.add(item.id);
        return true;
      }
    });
  };
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div className='Menu'>
      <div className='Menu_inner'>
        <div className='container'>
          <MenuHeader />
          <ul className='MenuHeader_inner_bellow_list'>
            {categories.map((item, index) => (
              <li key={index} className='MenuHeader_inner_bellow_list_item'>
                {item}
              </li>
            ))}
          </ul>
          <div className='Menu_inner_row'>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'succeeded' && (
              <ul>
                {removeDuplicates(products).map((product) => (
                  <ItemCard
                    key={product.id}
                    id={product.id}
                    price={product.price}
                    title={product.name} 
                    img={product.image}
                  />
                ))}
              </ul>
            )}
            {status === 'failed' && <p>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
