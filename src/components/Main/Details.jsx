import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Details() {
 
    
    const {id}=useParams()
    const [item,setItem]=useState({
        image:'',
        description:'',
        title:'',
        price:'',
        category:'',
        rating:'',
        rate:''


    })
   
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>{console.log(data);setItem(data)})

    },[])
  return (
    <div style={{display:"flex",margin:"100px auto",padding:"20px",width:"70%",border:"1px solid black", boxShadow:"0px 0px 10px black",justifyContent:"center",alignItems:"center",borderRadius:"20px",backgroundColor:"white"}}>
       
        <div style={{display:"flex"}}> 
            <img src={item.image} style={{margin:"20px"}} height={400} width={400} alt={item.title} />
            <div style={{borderLeft:"3px solid black"}} ></div>
        </div>
        <div style={{marginLeft:"10px"}}>
            <h3>Title:-{item.title}</h3>
            <p>category:-{item.category}</p>
            <p>description:-{item.description}</p>
            <p>price:-$   {item.price}</p>
            <section style={{display:"flex"}}>
            <section>
                <span  class="fa fa-star checked"></span>
                 <span class="fa fa-star checked"></span>
                 <span  class="fa fa-star checked"></span>
                 <span  class="fa fa-star"></span>
                 <span class="fa fa-star"></span>
                </section>&nbsp;&nbsp;&nbsp;
                <section><p>{item.rating&&item.rating.rate}</p></section>
                </section>
           
            <div>
       
       
      </div>

        </div>
    </div>
  )
}

export default Details