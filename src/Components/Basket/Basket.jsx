import React from 'react'
import './Basket.scss'
import Logo from '../../assets/icons/logo.gif'
import BasketItem from '../BasketItem/BasketItem'
import { useNavigate } from 'react-router-dom'

const Basket = () => {

    const navigate = useNavigate()
  return (
    <div className='Basket'>
        <div className="Basket-header">
            <div className="Basket-header-inner">
                <section>
                        <img
                         src={Logo} 
                         alt="Logo"
                         onClick={() => navigate('/')}
                         />
                </section>
                <section>
                    <span onClick={() => navigate('/menu')}>
                        <h2>Каталог</h2>
                    </span>
                </section>
            </div>
        </div>
        <div className="Basket-inner">
            <div className="Basket-inner-row">
                <BasketItem/>
                <BasketItem/>
                <BasketItem/>
                <BasketItem/>
                <BasketItem/>
                <BasketItem/>
            </div>
        </div>
    </div>
  )
}

export default Basket