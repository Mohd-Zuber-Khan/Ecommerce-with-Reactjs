import React, { useContext } from 'react'
import { ecommerceContext } from './Main'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import "./Css/cart.css"

function Cart() {

  const{cart, setCart} = useContext(ecommerceContext)


  function deleteToCart(e, index){
    e.preventDefault()
    setCart(cart.filter((task, id) =>{
      return id !== index
    }))

    // setCart(cart.filter(cartItem => cartItem.id !== index.id))
  }

  return (
    <>
      <section className='cart'>
        <h2>Cart</h2>
        <div className='cart-list'>

          {
            cart.map((item, index) => {
              return(
                <div className='cart-item' key={item.id}>
                  <div className='left'>
                    <img src={item.image}/>
                  </div>
                  <div className='right'>
                    <h3>{item.title}</h3>
                    <p>Price: {item.price}</p>
                  </div>
                  <Link className='deletToCart' onClick={(e) => deleteToCart(e, index)}><DeleteIcon/></Link>
                </div>
              )
            })
          }

        </div>
      </section>
    </>
  )
}

export default Cart
