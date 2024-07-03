import React from 'react'
import Logo from '../../assets/icons/logo.png'
import './Checkout.scss'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        alert('fuck you')
    }

  return (
    <div className='Checkout'>
        <div className="container">
            <div className="Checkout-header">
                <section>
                    <img
                     src={Logo} 
                     alt="Logo"
                    onClick={() => navigate('/')}
                      />
                </section>
                <section>
                <span>
                     <h3>
                        Оформить заказ
                     </h3>
                </span>
                <span>
                    <h3 onClick={() => navigate('/Menu')}>
                        Каталог
                    </h3>
                </span>
                </section>
            </div>
            <div className="Checkout-inner">
                <form>
                    <label htmlFor="Name">Имя</label>
                    <input id='Name' type="text" />
                    <label htmlFor="Phone">Телефон</label>
                    <input id='Phone' type="tel" />
                    <label htmlFor="address">Адрес</label>
                    <input id='address' type="text" />
                    <label htmlFor="description">Коментарий к заказу</label>
                    <input type="text"/>
                    <button onClick={handleSubmit} type='submit'>
                        Подтвердить заказ
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Checkout