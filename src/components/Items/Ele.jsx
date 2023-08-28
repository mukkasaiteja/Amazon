import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../Main/Mycontext'

function Ele() {
    const [men,setMen]=useState([])
    const {add} =useData()

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/electronics")
        .then(res=>res.json())
        .then(data=>{console.log(data);setMen(data)})
    })
  return (
    <div>
        {/* <div style={{backgroundColor:"gray",padding:"10px"}}>
       <Link to='/smartphone'>    <button style={{padding:"10px",width:"200px",backgroundColor:"transparent",outline:"none",border:"none",borderRadius:"10px",color:"wheat"}}><i style={{fontSize:"20px"}} class="fa-solid fa-phone"></i>smartphones</button></Link>  
       <Link to='/laptops'>     <button style={{padding:"10px",width:"200px",backgroundColor:"transparent",outline:"none",border:"none",borderRadius:"10px",color:"wheat"}}><i style={{fontSize:"20px"}} class="fa-solid fa-laptop"></i>laptops</button></Link>  
       <Link to='automotive'>     <button style={{padding:"10px",width:"200px",backgroundColor:"transparent",outline:"none",border:"none",borderRadius:"10px",color:"wheat"}}><i  style={{fontSize:"20px"}} class="fa-solid fa-bolt"></i>automotive</button></Link>  
        </div> */}
<div  style={{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center",justifyContent:"center",marginTop:"30px"}}>
{
    men.map((e)=>{
        return(
            <div style={{width:"400px",height:"600px",padding:"20px",border:"1px solid black",textAlign:"center",boxShadow:"1px 5px 5px 0px black",backgroundColor:"whitesmoke",borderRadius:"10px"}}>
                <img key={e.id} src={e.image} alt="" height={200} width={200} />
                <p key={e.id}>{e.title}</p>
                <p key={e.id} style={{height:"50px",overflow:"scroll"}}>{e.description}</p>
                <p key={e.id}> ${e.price}</p>
                <section style={{display:"flex",justifyContent:"center"}}>
                <section>
                <span  class="fa fa-star checked"></span>
                 <span class="fa fa-star checked"></span>
                 <span  class="fa fa-star checked"></span>
                 <span  class="fa fa-star"></span>
                 <span class="fa fa-star"></span>
                </section>&nbsp;&nbsp;&nbsp;
                <section key={e.id}><p>{e.rating.rate}stars</p></section>
                </section>

                <button style={{marginRight:"20px",width:"130px"}} onClick={()=>{add(e)}} className='btn2 '>ADD to cart</button>
            
                <Link to={`/details/${e.id}`}> <button style={{marginRight:"20px",width:"130px"}} className='bnt3' >Quick veiw</button></Link>
            </div>
        )
    })
}

    </div>
    </div>
  )
}

export default  Ele