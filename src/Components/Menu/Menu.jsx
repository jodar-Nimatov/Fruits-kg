import React from 'react'
import './Menu.scss'
import MenuHeader from '../MenuHeader/MenuHeader'
import ItemCard from '../ItemCard/ItemCard'



const Menu = () => {
  return (
    <div className='Menu'>
        <div className='Menu_inner'>
          <div className='container'>
            <MenuHeader />
            <div className='Menu_inner_row'>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
              <ItemCard/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Menu