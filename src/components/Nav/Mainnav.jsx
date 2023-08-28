import React from 'react'
import { Link } from 'react-router-dom'

function Mainnav() {
  return (
    <div>
        <ul style={{display:"flex",backgroundColor:"gray",padding:"10px",width:"100%",color:"white"}}>
            <Link style={{display:"flex"}} to='/'><i class="fa-solid fa-bars"></i><li  style={{color:"white",marginLeft:"5px"}}>ALL</li></Link>
         <Link to='/mens'>  <li style={{color:"white"}}>MEN'S CLOTHS</li></Link> 
         <Link to='/womens'>   <li style={{color:"white"}}>WOMEN'S CLOTHS</li></Link> 
         <Link to='/electronic'>   <li style={{color:"white"}}>ELECTRONIC'S DEVICES </li></Link> 
         <Link to='/jewellery'>   <li style={{color:"white"}}>JEWELLERY</li></Link> 
        </ul>
    </div>
  )
}

export default Mainnav