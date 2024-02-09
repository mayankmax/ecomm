import React from 'react';
import './ProductCard.scss';
import Button from '../Button'; // Assuming Button component is exported as default from '../Button'

export default function ProductCard(props) {
  let imgurl = "https://nobero.com/cdn/shop/files/OAT-MILK_6fa442d8-a20a-48ad-9a35-cf882e2fa831.jpg";
  let imgheight = "440px";
  let imgwidth = "384px";
  
  return (
    <div className='product-body'>
      {/* Image */}
      <img src={imgurl} alt='Product' height={imgheight} width={imgwidth} />
      
      {/* Top section */}
      <div className='product-top'>
        <div className='topleft'>
          <span>New</span>
        </div>
        <div className='topright'>
          <span style={{float:"right"}}>Best Seller</span>
        </div>
      </div>
      
      {/* Bottom section */}
      <div className='product-bottom'>
        <div className='bottomleft'>
          <article>
          <img src="//nobero.com/cdn/shop/t/199/assets/icon-star.svg?v=14126362621129950281694702967" loading="lazy" width="12" height="12" alt="star icon" />
          <span class="text-[#242F66] pl-0.5 font-[familyMedium] text-xs lg:text-sm">
                4.2 | 65
              </span>
          </article>
        </div>
        {/* Uncomment the following div if you want to include the Button */}
        {/* <div className='bottomright'>
          <Button type="button" name="Shop now" className="btn-original" />
        </div> */}
      </div>
    </div>
  );
}
