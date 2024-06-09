import React, { useState } from 'react'
import './MenuHeader.scss'
import Logo from '../../assets/icons/logo.gif'

const MenuHeader = () => {

    const [categs, setCategs] = useState(1)

    const categories = ['Все', 'Фрукты', 'Овощи']


  return (
    <div className='MenuHeader'>
        <div className='MenuHeader_inner'>
            <div className='MenuHeader_inner_above'>
                    <img
                     src={Logo} 
                     alt="Logo" 
                     className='logo'
                     />
            </div>
            <div className='MenuHeader_inner_bellow'>
                <ul className='MenuHeader_inner_bellow_list'>
                    {
                        categories.map((item) => (
                            <li className='MenuHeader_inner_bellow_list_item'>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MenuHeader