
import React ,{useContext, useState} from 'react'
import {ContextData} from './CardContext'



// https://datastore-9a975.web.app


const CardItem = ( {...val} ) => {


const {Removeitems} = useContext(ContextData)

const {increas , lessValue} = useContext(ContextData)

const [img, setImg] = useState(true)


  const totalPrice = (qty ,price) => {

       const sum = qty * price ;
       return sum;
  }

 const change = (event) => {
  const chg =  event.target.value;
  return chg;
  
 }

  return (
    <>
        <div className='itemsTotal'>
          
          <div className='itemsImg'>
                <img src={ img ? val.img : "/Image/phone2.jpg"} />
          </div>

          <div className='itemTitle'>
            <h4>{val.title}</h4>
            <p>{val.description}</p>
          </div>

          <div className='itemsAdd'>
                <span  onClick={  () => val.quantity > 4 ? setImg(false ,  increas(val.id))   : increas(val.id)}>+</span>
                <input type="text"  value={val.quantity} className="mx-3 text-center" onChange={change} />
                <span  onClick={ () => lessValue(val.id) } >-</span>

          </div>

          <div className='itemsPrice'>
          <h4>{totalPrice(val.quantity,val.price)}Rs</h4>
          </div>

          <div className='itemsDelete'>

          <i className="fa-solid fa-trash-can" onClick={ () => Removeitems(val.id) }></i>
        


          </div>

           </div>  

    </>
  )
}

export default CardItem