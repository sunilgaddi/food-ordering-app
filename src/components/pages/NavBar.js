import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import '../css/NavBar.css'

function NavBar() {
    const [active, setActive] = useState(false);
    return (
        <header>

            <nav className={`${active && 'slide__nav'}`}>
                <ul onClick={() => setActive(!active)}>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : "")} to='/'>
                            <ReceiptLongOutlinedIcon className='icons' />menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : "")} to='/orders'>
                            <LocalMallIcon className='icons' />my orders
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div onClick={() => setActive(!active)} className={`hamburgerMenu__wrapper ${active && 'animate__menu'}`}>
                <span className='line' />
            </div>

        </header>
    );
}

export default NavBar