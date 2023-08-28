import React from 'react'
import { useData } from './Mycontext'
import { Link } from 'react-router-dom'


function Total() {
    const {total,subtotal,shipping}=useData()
  
 
  return (
    <div className='subtotal'>
    {<>
        <h3>subtotal:-{Math.round(subtotal)}</h3>
        <p>shipping:-{shipping}</p>
        <h1>Total:-{Math.round(total)}</h1>

        </>
    }
    <div>
    <Link to='/checkout'>     <button id='none'>
        <svg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24" id="cart">
    <path fill="#000000" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
</svg>
 <Link to='/checkout'> <span >Checkout</span></Link>
  <svg id="check" style={{width:"24px",height:"24px"}} viewBox="0 0 24 24">
    <path stroke-width="2" fill="none" stroke="#ffffff" d="M 3,12 l 6,6 l 12, -12"/>
  </svg>

        </button></Link>
    </div>
    </div>
  )
}

export default Total