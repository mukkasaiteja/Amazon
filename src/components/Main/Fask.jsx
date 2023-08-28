import React from 'react'
import {useData } from './Mycontext';
import { Link } from 'react-router-dom';

function Fask() {

    
    const {add,data}=useData();
  return (
    <div  style={{display:"flex",flexWrap:"wrap",gap:"20px",alignItems:"center",justifyContent:"center",marginTop:"30px"}}>
{
    data.map((e)=>{
        return(
            <div style={{width:"400px",height:"600px",padding:"20px",border:"1px solid black",textAlign:"center",boxShadow:"1px 5px 5px 0px black",backgroundColor:"whitesmoke",borderRadius:"10px"}}>
                <img src={e.image} alt="" height={200} width={200} />
                <p key={e.id}>{e.title}</p>
                <p style={{height:"50px",overflow:"scroll"}}>{e.description}</p>
                <p>${e.price}</p>
                <section style={{display:"flex",justifyContent:"center"}}>
                <section>
                <span  class="fa fa-star checked"></span>
                 <span class="fa fa-star checked"></span>
                 <span  class="fa fa-star checked"></span>
                 <span  class="fa fa-star"></span>
                 <span class="fa fa-star"></span>
                </section>&nbsp;&nbsp;&nbsp;
                <section><p>{e.rating.rate}stars</p></section>
                </section>

                <button style={{marginRight:"20px",width:"130px"}} className='btn2 ' onClick={()=>add(e)}>ADD to cart</button>
            
                <Link to={`/details/${e.id}`}> <button style={{marginRight:"20px",width:"130px"}} className='bnt3' >Quick veiw</button></Link>
            </div>
        )
    })
}

    </div>
  )
}

export default Fask