import React from 'react'
import './Check.css'
import { useData } from './Mycontext'
import { Link } from 'react-router-dom'

function Checkout() {
    const {total}=useData()
  return (
    <div>
        <main>
        <div class="card">
            <div class="card-header">
                <img src="https://rvs-order-summary-component.netlify.app/images/illustration-hero.svg" alt=""/>
            </div>
            <div class="card-body">
                <div class="card-title">Order Summary</div>
                <div class="card-text">You can now buy the products and ebooks and many more</div>
                <div class="card-plan">
                    <div class="card-plan-img"><img src="https://rvs-order-summary-component.netlify.app/images/icon-music.svg" alt=""/></div>
                    <div class="card-plan-text">
                        <div class="card-plan-title">Annual Plan</div>
                        <div class="card-plan-price">{Math.round(total)}</div>
                    </div>
                    <div class="card-plan-link"><a href="#!">Change</a></div>
                </div>
                <div class="card-payment-button">
                <Link to='/devliery'>  <button>Proceed to Payment</button></Link>  
                </div>
                <div class="card-cancel-button">
              <Link to='/cart'   >   <button>Cancel Order</button></Link>
                </div>
            </div>
        </div>
    </main>



    </div>
  )
}

export default Checkout