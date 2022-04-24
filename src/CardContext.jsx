
import React,{createContext,useReducer,useEffect} from 'react';
import Api from './Api';
import Container from './Container';
import Header from './Header';

export const ContextData = createContext();

const reducer = (state ,action) => {
         
     if(action.type === "ItemsRemove" ){

       return {
         ...state,
         data : state.data.filter( (curElem) => {
           return  curElem.id !== action.payload ;
           
         }),
       }
     }



     if(action.type === "RemoveAll"){
         
       return {
         ...state,
         data : [],
       }
         
     }


     if(action.type === "increaces" ){
      
      const  incVal = state.data.map( (val) => {
            
                  if(val.id === action.payload){
                     
                     return {
                        ...val,
                        quantity : val.quantity += 1,
                     
                     }
                      
                  }
                 return val
      })

      return {...state , data : incVal}
       
     }




     if(action.type === "LessValue"){

         const lessVal = state.data.map( (val) => {

               
              if(val.id === action.payload){
                    return {
                      ...val ,
                      quantity : val.quantity - 1 ,

                    }
                  }

              return val ;
                }).filter( (value) => {
                   
                  return   value.quantity !== 0
  
                })
        
           return {...state ,  data : lessVal  }
     }



     if(action.type === "totalItems"){
 
      let {totalItems,totalAmout} =  state.data.reduce( (acumme , current) => { 
       
         let totalPrice = current.quantity * current.price ;

          acumme.totalAmout += totalPrice ;
           
           acumme.totalItems +=  current.quantity ;

            return acumme;

          } , {totalItems : 0 , totalAmout : 0 });

          return {...state ,  totalItems , totalAmout }

     }

     return state;  
   
}

const initialState = {
  data : Api,
  totalAmout : 0,
  totalItems : 0,
}

const CardContext = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

    const Removeitems= (id) => {
            
     dispatch({
        type:"ItemsRemove",
        payload : id
      })
  }  
   
  const increas = (id) => {
       
    dispatch({
      type:"increaces",
      payload : id,
    })
  }


  const lessValue = (id) => {
     
    dispatch({
      type  : "LessValue",
      payload : id ,
    })
  }

   const RemoveAll = () => {
      dispatch ({
        type : "RemoveAll",
      })
   }

   
   useEffect(() => {

    dispatch({
      type: "totalItems"
    });
   }, [state.data])
   


  return (
    <>
    
    <ContextData.Provider value={{...state,  Removeitems , increas , lessValue ,RemoveAll }}  >

         <Header />
      <Container />
      
      </ContextData.Provider>
    
    </>
  )
}

export default CardContext;