import React from 'react'
import './Nav.css'
import { Link, useNavigate } from 'react-router-dom'
import { useData } from '../Main/Mycontext'
import { useAuth0 } from "@auth0/auth0-react";


function Nav() {
  const {cartProducts}=useData()
  const { loginWithRedirect,isAuthenticated, logout, user } = useAuth0();

  let navigate=useNavigate()
  const goTo=()=>{
    navigate('./')
  }
  return (
     <nav>
    <section>
      <img className='logoImg' onClick={goTo} src="https://i.pinimg.com/564x/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.jpg" alt=''/>
      </section>
      <li>
      {isAuthenticated && (
            <li style={{display:"flex",flexDirection:" column"}}>
              <p>wellcom to our website</p>
              <p> {user.name} </p>
            </li>
          )}
      </li>
      <section>
        <input className='input' type="text" name="" id="" /><i style={{color:"black",backgroundColor:"wheat" ,border:"1px solid wheat",padding:"10px" ,fontSize:"21px"}} class="fa-solid search fa-magnifying-glass"></i>
      </section>
    <section>
     <ul className='item'>
      <li>
        <select style={{outline:"none",border:"none",backgroundColor:"black",color:"white", width:"100px"}} name="" id="">
       
          <option value="">ENGLISH</option>
          <option value="">TELUGU</option>
          <option value="">HINDI</option>
        </select>
      </li>
    
      <li>
      {isAuthenticated ? (
            <li>
              <button style={{width:"100px",padding:"10px",color:"black",background:"yellow",borderRadius:"5px"}}
                onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button onClick={() => loginWithRedirect()} style={{width:"100px",padding:"10px",color:"black",background:"yellow",borderRadius:"5px"}}>Log In</button>
            </li>
          )}
      </li>
      <Link to='/cart'>
      <li style={{color:"wheat"}}>
        {cartProducts.length}
      <i class="fa-solid fa-cart-shopping"></i>
      <p style={{color:"wheat"}} className='para'>Cart</p>
      </li></Link>
     </ul>

    </section>
   </nav>

  )
}

export default Nav