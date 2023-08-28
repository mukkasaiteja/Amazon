import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Items() {
    const {id}=useParams()
    const [details,setDetails]=useState({
        images:'',
        description:'',
        title:'',
        price:'',
        category:'',
        rating:'',
        rate:''

    })
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>{console.log(data);setDetails(data)})

    },[])
  return (
    <div style={{display:"flex",margin:"100px auto",padding:"20px",width:"70%",border:"1px solid black", boxShadow:"0px 0px 10px black",justifyContent:"center",aligndetailss:"center",borderRadius:"20px",backgroundColor:"white"}}>
       
        <div style={{display:"flex"}}> 
            <img src={details.images[0]} style={{margin:"20px",borderRadius:"20PX"}} height={400} width={400} alt={details.title} />
            <div style={{borderLeft:"3px solid black"}} ></div>
        </div>
        <div style={{marginLeft:"10px"}}>
            <h3>Title:-{details.title}</h3>
            <p>category:-{details.category}</p>
            <p>description:-{details.description}</p>
            <p>price:-$   {details.price}</p>
            <section style={{display:"flex"}}>
            <section>
                <span  class="fa fa-star checked"></span>
                 <span class="fa fa-star checked"></span>
                 <span  class="fa fa-star checked"></span>
                 <span  class="fa fa-star"></span>
                 <span class="fa fa-star"></span>
                </section>&nbsp;&nbsp;&nbsp;
                <section><p>{details.rating}</p></section>
                </section>
           
            <div>
      
      </div>

        </div>
    </div>
  )
}

export default Items