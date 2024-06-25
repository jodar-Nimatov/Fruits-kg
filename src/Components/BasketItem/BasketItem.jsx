import React, { useState } from 'react'
import './BasketItem.scss'
import image from '../../assets/images/Rectangle 1.png'

const BasketItem = () => {
    
    const [killograms, setKillograms] = useState(1)

    const increaseKillos = () => {
        setKillograms(killograms + 1)
    }

    const decreaseKillos = () => {
        setKillograms(killograms - 1)
    }

  return (
    <div className='BasketItem'>
        <div className="BasketItem-inner">
            <section>
                <img src={image} alt="IMG" />
                <h3>Ananas</h3>
            </section>
            <div>
                <section>
                    <button onClick={decreaseKillos}>-</button>
                    <h4>{killograms} Kg</h4>
                    <button onClick={increaseKillos}>+</button>
                </section>
                <section>
                    <p>
                        1 522.00 com
                    </p>
                </section>
            </div>
        </div>
    </div>
  )
}

export default BasketItem