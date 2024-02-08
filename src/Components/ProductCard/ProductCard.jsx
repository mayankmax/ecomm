import React from 'react'
import './ProductCard.scss';
import {Button} from '../Button'

export default function ProductCard(props) {
    let imgurl = "https://nobero.com/cdn/shop/files/OAT-MILK_6fa442d8-a20a-48ad-9a35-cf882e2fa831.jpg";
    let imgheight = "440px";
    let imgwidth = "360px";
  return (
 
   
    <div className='product-body'>
        {/* this will take imgage  */}
        <img src={imgurl} alt='img' height={imgheight} width={imgwidth}/>
        <div className='product-top'>
            <div className='topleft'>
                <p>New </p>
            </div>
            <div className='topright'>
                <p>Best Seller</p>
            </div>
        </div>
        <div className='product-bottom'>
        <div className='bottomleft'>
                <p>New Arrival</p>
            </div>
            <div className='bottomright'>
                <Button type="button" name="Shop now" className="btn-orginial"/>
            </div>

        </div>
    </div>
   
  )
}
