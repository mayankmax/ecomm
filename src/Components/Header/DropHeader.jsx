import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import './DropHeader.scss'

export default function DropHeader() {
  return (
    <div className='DropHeader'>
        <div className='drop category'>
            <img src='https://nobero.com/cdn/shop/collections/hoodie.png?v=1696572983 ' height={150} width={150}></img>
            <img src='https://nobero.com/cdn/shop/collections/hoodie.png?v=1696572983 ' height={150} width={150}></img>
            <img src='https://nobero.com/cdn/shop/collections/hoodie.png?v=1696572983 ' height={150} width={150}></img>
            <img src='https://nobero.com/cdn/shop/collections/hoodie.png?v=1696572983 ' height={150} width={150}></img>
            <img src='https://nobero.com/cdn/shop/collections/hoodie.png?v=1696572983 ' height={150} width={150}></img>
        </div>

        <div className=' news'>
        <div className='newsCard'>
          <a>
            <div>
              <img
                src='https://nobero.com/cdn/shop/collections/hoodie.png?v=1696572983 '
                height={48}
                width={48}
                alt='News Image'
              />

              <div className='card_description'>
                <p>News Title 1</p>
                <p>News Description 1</p>
              </div>

              <div className='card_icon'>
                {/* ">" icon */}
                <IoIosArrowForward className='your-icon-class' />
              </div>
            </div>
          </a>
          
          <a>
          <hr />
            <div>
              <img
                src='https://nobero.com/cdn/shop/collections/hoodie.png?v=1696572983 '
                height={48}
                width={48}
                alt='News Image'
              />

              <div className='card_description'>
                <p>News Title 2</p>
                <p>News Description 2</p>
              </div>

              <div className='card_icon'>
                {/* ">" icon */}
                <IoIosArrowForward className='your-icon-class' />
              </div>
            </div>
          </a>
          
          <a>
          <hr />
            <div className='card'>
              <img
                src='https://nobero.com/cdn/shop/collections/hoodie.png?v=1696572983 '
                height={48}
                width={48}
                alt='Card Image'
              />

              <div className='card_description'>
                <p>Card Title</p>
                <p>Card Description</p>
              </div>

              <div className='card_icon'>
                {/* ">" icon */}
                <IoIosArrowForward className='your-icon-class' />
              </div>
            </div>
          </a>
        </div>
      </div>

    </div>
  )
}
