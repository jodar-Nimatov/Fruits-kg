import React, { useEffect, useState } from 'react'
import './Menu.scss'
import MenuHeader from '../MenuHeader/MenuHeader'
import ItemCard from '../ItemCard/ItemCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../features/productsSlice'

const Menu = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);
  const products = useSelector((state) => state.products.items);
  const error = useSelector((state) => state.products.error);
  
  const [categs, setCategs] = useState(1)

  const categories = ['Все', 'Фрукты', 'Овощи']


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'succeeded') {
    content = (
      <ul>
        {products.map((product) => (
          <ItemCard key={product.id} id={product.id} price={product.price} title={product.title} img={product.image}/>        
          ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div className='Menu'>
        <div className='Menu_inner'>
          <div className='container'>
            <MenuHeader />
            <ul className='MenuHeader_inner_bellow_list'>
                    {
                        categories.map((item) => (
                            <li className='MenuHeader_inner_bellow_list_item'>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            <div className='Menu_inner_row'>
              {content}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Menu
