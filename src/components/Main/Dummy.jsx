import React from 'react'
import {useData } from './Mycontext';
import "./Dummy.css"
import { Link } from 'react-router-dom';


function Dummy() {
    const {product,add}=useData();
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"20px",alignItems:"center",justifyContent:"center",marginTop:"50px"}}>
{
    product.map((e)=>{
        return(
            <div style={{width:"400px",height:"600px",padding:"20px",border:"1px solid black",textAlign:"center",boxShadow:"1px 5px 5px 0px black",backgroundColor:"whitesmoke",borderRadius:"10px"}}>
                <img src={e.images[0]} alt="" height={200} width={200} />
                <p key={e.id}>{e.title}</p>
                <p>{e.description}</p>
                <p>${e.price}</p>
                <section style={{display:"flex",justifyContent:"center"}}>
                <section>
                <span  class="fa fa-star checked"></span>
                 <span class="fa fa-star checked"></span>
                 <span  class="fa fa-star checked"></span>
                 <span  class="fa fa-star"></span>
                 <span class="fa fa-star"></span>
                </section>&nbsp;&nbsp;&nbsp;
                <section><p>{e.rating}stars</p></section>
                </section>

                <button className='btn2 ' onClick={()=>add(e)}>ADD to cart</button>
                <Link to={`/items/${e.id}`}> <button style={{marginRight:"20px",width:"130px"}} className='bnt3' >Quick veiw</button></Link>
            </div>
        )
    })
}

    </div>
  )
}

export default Dummy