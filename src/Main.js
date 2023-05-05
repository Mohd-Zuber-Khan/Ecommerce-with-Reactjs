import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Cart from './Cart'

export const ecommerceContext = createContext({})

function Main() {

    const [cart, setCart] = useState([])

    return (
        <>
            <ecommerceContext.Provider value={{cart, setCart}}>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path='/about' element={<About/>} />
                        <Route path='/cart' element={<Cart/>}/>
                    </Routes>
                </BrowserRouter>
            </ecommerceContext.Provider>
        </>
    )
}

export default Main