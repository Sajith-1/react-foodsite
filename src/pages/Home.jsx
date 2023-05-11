import React from 'react';

import BannerImage from '../assets/Sdhome.png';
import '../styles/Home.css'
import  { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem';
import Logo2 from '../assets/Hunger 2 logo.png';




function Home() {
    return (
        <div>
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer'>
                <h2 id='good'>Good Food is<br></br>
                The Foundation of <br></br>
                <span id='genuine'>GENUINE HAPPINESS</span>
                </h2>
                
            </div>
        </div>
 <section class="mid">
        
        <p class="pp">Our Most Popular Recipes</p>
       
        <p id="most">Try our Most Delicious food and it Usually take minutes to deliver!</p>
    
    <div class="buttons">
        <button >All</button>
        <button>HOT</button>
        <button>COLD</button>
        <button id="b">BAGEL</button>
        
    </div>
    
 </section>
 <div className='menu'>
    <br></br>
          <div className='menuList'>{MenuList.map((menuItem, key)=>{
              return <MenuItem 
              key={key}
              image ={menuItem.image}
             
              name={menuItem.name} 
              price={menuItem.price} />
              
          })}
       
          </div>
      </div>

      <h1 id='sub'>Subtotal: $0</h1>

      <img src={Logo2} class="h2" alt=''/>
<div class="lp">
<p id="fp">Premium Quality food at the best and most affordable price.</p>
<p id="sp"> we have a new offer every day for 365 days</p>
</div>
<div class="footp">
<h4 id="fh">Contact</h4>
<p id="emailp">Email: quickfood@Hungercaptain.com | Hotline: +1 131 138 138</p>

</div>
<hr id="space"></hr>
<p id="lastl">DESIGN BY HUNGER CAPTAIN - © 2022. ALL RIGHTS RESERVED.</p>
<br></br>

          

        </div>

        
    );
}

export default Home;