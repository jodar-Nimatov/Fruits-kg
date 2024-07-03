import React from 'react'
import './ModalBasket.scss'
import { useNavigate } from 'react-router-dom'

const ModalBasket = ({ active, setActive }) => {
  const navigate = useNavigate();

  return (
    <div className='Modal' style={active ? {display: 'block'} : {display: 'none'}}>
        <div className="Modal-inner">
            <section>
                <h3>Товар добавлен в корзину</h3>
            </section>
            <section>
                <button onClick={() => navigate('/Basket')}>
                    Перейти в корзину
                </button>
                <button onClick={() => setActive(false)}>
                    Продолжить покупки
                </button>
            </section>
        </div>
    </div>
  )
}

export default ModalBasket