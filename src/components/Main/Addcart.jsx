import React from 'react'

import { useData } from './Mycontext';
function Addtocart() {
  // const [count,setCount]=useState(1)
    const {cartProducts,remove} = useData()
    console.log(cartProducts)
  // const inc=()=>{
  //   setCount(count+1)

  // }
  // const dec=()=>{
  //   var dec=document.getElementById('dec')
  //   if (count===1) {
  //     alert('prodcuts in negitive')
  //  dec.style.display='none'
      
  //   }else if(count>=1){
  //     dec.style.display='block'
  //     setCount(count-1)
  //   }
  
    
  // }
  const total= cartProducts.reduce((amount,item)=>item.price+amount,0)

  return (
    <div style={{margin:"10px"}} >
    {cartProducts.map((product) => {
      return (
        <div style={{ padding: "10px" ,marginLeft:"70px"}} key={product.id}>
          <img
            width="150px"
            height="150px"
            src={product.image}
            alt="product"
          />
          <h3>{product.title}</h3>
          <p>Category : {product.category}</p>
          <p style={{ color: "blue" }}>{product.price}</p>
         <div style={{display:"flex"}}>
         {/* <button onClick={inc}>+</button><h6>{count}</h6><button id='dec' onClick={dec}>-</button> */}
         </div>
         <div>
         {
          total
         }
         </div>
          <button 
             onClick={() => remove(product.id)}
            style={{
              backgroundColor: "red",
              width: "200px",
              height: "30px",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Remove From  cart
          </button>
         
          
        </div>
      );
    })}
  </div>
  )
}

export default Addtocart