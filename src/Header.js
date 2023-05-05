import React, { useContext } from 'react'
import './Css/header.css'
import { Link } from 'react-router-dom'
import { ecommerceContext } from './Main'


function Header() {

    const {cart} = useContext(ecommerceContext)

    return (
    <header>
        <h1>Ecommorce</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/cart">Cart <span className='count'>{cart.length}</span></Link>
                </li>
            
            </ul>
        </nav>
    </header>
    )
}

export default Header