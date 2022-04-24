
import React,{useContext} from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import CardItem from './CardItem';
import {ContextData} from './CardContext';


const Container = ({...val}) => {

    const { data, RemoveAll , totalItems , totalAmout} = useContext(ContextData);


  

// console.log(data.id)
   
//    const   priceVal =  data.map( (val) => {
//       return  val.price
          
//        });


    

      //  const totalPrice =   priceVal.reduce( (priveVal ,currVal) => {
      //    return priveVal + currVal  },0) ;
       


   //   console.log(priceVal)

   return (
    <>
    <section className='container '>

    <div className='container itemsContainer'>
      <div className='containerTitle'>
      <h2>Shopping Card</h2>
      <h5>Total items in your List {totalItems}</h5>
      </div>
      <div className='Items '>

      <Scrollbars >

          <div className='itemsList'>

          
           {data.map( (val) => {

              return   <CardItem key={val.id} {...val} />

        
           })}
        
       

          </div>

          </Scrollbars>
      </div>

      <div className='totlaAmount my-4'>
          <h3>Card Total :  <strong>{   totalAmout }</strong><i className="fa-solid fa-indian-rupee-sign"></i></h3>
          <button type="button" className="btn btn-outline-info my-4">Check Out</button>

          <button type="button" className="btn btn-outline-info my-4 mx-3" onClick={ RemoveAll}>Remove All</button>

      </div>

   </div>

    </section>
   
     
    </>
  )
}

export default Container


// priceVal.reduce( (priveVal ,currVal) => {
//    return priveVal + currVal },0) 