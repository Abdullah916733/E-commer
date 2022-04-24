
import React,{useContext} from 'react';
import './Container.css';
import {ContextData} from './CardContext'



const Header = () => {

  const { data , totalItems}  = useContext(ContextData);

  return (
    <>

    <header>
        <div className=' headerCreate'>
            <div className='headerIconArrow'>
            <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className='headerTitle'>
        <h3>Continue Shopping</h3>   
        </div>
        <div className='headerIcon'>
        <span className='headerIconNumber'><h4>{totalItems}</h4></span>
        <i className="fa-solid fa-cart-shopping"></i>
        </div>
        </div>
    </header>
    
    </>
  )
}

export default Header