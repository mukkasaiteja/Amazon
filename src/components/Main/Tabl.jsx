import React, { useState } from 'react'
import { useData } from './Mycontext'
import './Addcart.css'
import Total from './Total'

function Tabl() {
  
    const {cartProducts,remove,goto} = useData()
    console.log(cartProducts)
   
    
 
  return (
    <div>
        {
            cartProducts.map((product)=>{
                return(
                    <div div className='main'>
                    
                    <div className='productname'>
                        <div>
                        <img src={product.image} height={100} width={100} style={{}} alt="" />
                        </div>
                        <div className='mainI'>
                            <h3>{product.title}</h3>
                            <p>{product.ce}</p>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                            <select  onChange={goto}>
                                <option value="1">
                                    1
                                </option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">4</option>
                            </select>
                            <button  
             onClick={() => remove(product.id)}
            style={{
           
             margin:"",
           
            
              border: "none",
              borderRadius: "5px",
            }}
          >
         <i  class="fa-solid fa-trash butt"></i>
          </button>
                        </div>

                    </div>
                    <Total/>
                    </div>
                    
                )
            })
        }

    </div>
  )
}

export default Tabl