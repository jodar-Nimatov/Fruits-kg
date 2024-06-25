import './MenuHeader.scss'
import Logo from '../../assets/icons/logo.gif'
import carticon from '../../assets/icons/cart.svg'
import { Link } from 'react-router-dom'

const MenuHeader = () => {

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
                    <button className='cart-button'>
                        <div className='cart-items-count'>0</div>
                        <img className='cart-icon' src={carticon} alt="cart icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuHeader