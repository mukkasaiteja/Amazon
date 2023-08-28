import { createContext, useContext, useState, useEffect } from 'react';

const Mycontext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [product,setProduct]=useState([])
  const [cartProducts,setCartProducts] = useState([]);
  const [select,setselect]=useState(1);
const add=(e)=>{
setCartProducts([...cartProducts,e])
alert("product is added to cart")
}
const remove=(id)=>{
let filteredData = cartProducts.filter((product)=>product.id!==id)
setCartProducts(filteredData)
}

  
  useEffect(() => {
    fetch(' https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {setData(data);console.log(data);});
  }, []);


  useEffect(()=>{

      fetch("https://dummyjson.com/products")
      .then(res=>res.json())
      .then(data=>{console.log(data.products);setProduct(data.products)})
  },[])
  const goto=(e)=>{
    setselect(e.target.value)
    console.log();

}

console.log(select);
const subtotal=   cartProducts.reduce((amount,item)=>item.price*select+amount,0);
const shipping=60;
const total=subtotal+shipping


  return (
    <Mycontext.Provider value={{add,data,product,cartProducts,setCartProducts,remove,goto,total,subtotal,shipping}}>
      {children}
    </Mycontext.Provider>
  );
}

export function useData() {
  return useContext(Mycontext);
}
