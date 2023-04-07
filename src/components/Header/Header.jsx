import './header.scss'
import MyIcon from '../../assets/icons/Logo.svg'
import ExitIcon from '../../assets/icons/Exit.svg'
import ShopIcon from '../../assets/icons/Shop.svg'
import BarIcon from '../../assets/icons/Bar.svg'
import BagIcon from '../../assets/icons/Bag.svg'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const cartLength = useSelector((state) => state.cart.length)

  return (
    <header id="header" className="header">
      <div className="container">
        <div className="top">
          <ul className="list">
            <li className="list__item">
              <NavLink>
                <img src={MyIcon} alt="My Icon" />
              </NavLink>
            </li>
            <li className="list__item">
              <NavLink>
                <img src={BarIcon} alt="My Icon" />
              </NavLink>
            </li>
            <li className="list__item">
              <NavLink to="/">
                <img src={ShopIcon} alt="My Icon" />
              </NavLink>
            </li>
            <li className="list__item">
              <NavLink to="/cart">
                <div className="sup-box">
                  <img src={BagIcon} alt="My Icon" />
                  <sup className="sup">{cartLength}</sup>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <NavLink>
            <img src={ExitIcon} alt="My Icon" />
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
