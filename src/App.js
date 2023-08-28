
import './App.css';

import Mainnav from './components/Nav/Mainnav';
import Nav from './components/Nav/Nav';
import All from './components/Main/All'
import { Route,Routes } from 'react-router-dom';
import Mens from './components/Items/Mens';
import Women from './components/Items/Women';
import Ele from './components/Items/Ele';
import Jewelery from './components/Items/Jewelery';
import Details from './components/Main/Details';
import Items from './components/Main/Items';
import Footer from './components/Footer/Footer';
import Cart from './components/Main/Addcart';
import Page from './components/Main/Page';
import Tabl from './components/Main/Tabl';
import Checkout from './components/Main/Checkout';
import Devliery from './components/Main/Devliery';

function App() {
  const imageUrls = [
    'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x_1._CB596732923_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/Haircare-Herofader-PCaa._CB597035612_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/GW_Raksha_bandhan_PC_UnRec_3000x1200._CB597094444_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/0-PC_Hero_2x-OUTDOOR-Aug9._CB597738293_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/augatf23/unrec/bobfed/MA_3000._CB596932098_.jpg'
    // Add more image URLs here
  ];
  return (
    <div className="App">
    <Nav/>
  <div id='components'>
    <Mainnav/>

  </div>
  <section>

  <Routes>
    <Route path='/' element={<All images={imageUrls}/>}/>
    <Route path='/mens' element={<Mens/>}/>
    <Route path='/womens' element={<Women/>}/>
    <Route path='/electronic' element={<Ele/>}/>
    <Route path='/jewellery' element={<Jewelery/>}/>
    <Route path='/details/:id' element={<Details/>}/>
    <Route path='/items/:id' element={<Items/>}/>
    <Route path='/cart' element={<Tabl/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/devliery' element={<Devliery/>}/>
    
    <Route path='*' element={<Page/>}/>
    

  </Routes>
  </section>
  <Footer/>
    </div>
  );
}

export default App;
