import './MenuHeader.scss'
import Logo from '../../assets/icons/logo.png'
import carticon from '../../assets/icons/cart.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../features/cartSlice'

const MenuHeader = () => {
    const items = useSelector(selectCartItems);

    return (
        <div className='MenuHeader'>
            <div className='MenuHeader_inner'>
                <div className='MenuHeader_inner_above'>
                    <Link to='/'>
                        <img
                            src={Logo}
                            alt="Logo"
                            className='logo'
                        />
                    </Link>
                </div>
                <div className='MenuHeader_inner_bellow'>
                    <Link to='/Basket'>
                    <button  className='cart-button'>
                        <div className='cart-items-count'>{items?.length}</div>
                        <img className='cart-icon' src={carticon} alt="cart icon" />
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MenuHeader