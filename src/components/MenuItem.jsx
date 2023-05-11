import React from 'react';
import heart from '../assets/icons8-heart-50.png'

function MenuItem({name, price, image,details}) {
    return (
        <div className='menuItem'>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>${price}</p>
            <p>{details}</p>
            <button>Add to cart</button>
            <img src={heart} alt="" />
        </div>
    );
}

export default MenuItem;