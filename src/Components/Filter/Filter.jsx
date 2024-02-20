import React, { useState } from 'react';
import './Filter.scss';
import { Input } from '../Input';
import { ProductCard } from '../ProductCard';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const [priceBodyVisible, setPriceBodyVisible] = useState(true);
  const [sizeBodyVisible, setSizeBodyVisible] = useState(true);
  const [availabilityBodyVisible, setAvailabilityBodyVisible] = useState(true);
  const categoryResult = useSelector((state) => state.autosuggest.result);

  console.log("hello result", categoryResult);

  const handlePriceClose = () => {
    setPriceBodyVisible(!priceBodyVisible);
  };

  const handleSizeClose = () => {
    setSizeBodyVisible(!sizeBodyVisible);
  };

  const handleAvailabilityClose = () => {
    setAvailabilityBodyVisible(!availabilityBodyVisible);
  };

  return (
    <section>
      <div className='filter-main'>
        <div className='filter-header'></div>
        <div className='filter-body'>
          <div className='body-left'>
            <h2>Filter</h2>
            <hr />
            <div className='filter-price'>
              <div>
                <h3>
                  Price{' '}
                  <span
                    className="upward-arrow"
                    onClick={handlePriceClose}
                    style={{ float: 'right', cursor: 'pointer' }}
                  >
                    {priceBodyVisible ? '^' : 'v'}
                  </span>
                </h3>
              </div>
              {priceBodyVisible && (
                <div className='price-body'>
                  {/* Input elements for price options */}
                  <label className="input-label">
                    <Input type="radio" />
                    price less than 500
                  </label>
                  <label className="input-label">
                    <Input type="radio" />
                    price less than 600
                  </label>
                  <label className="input-label">
                    <Input type="radio" />
                    price less than 700
                  </label>
                  <label className="input-label">
                    <Input type="radio" />
                    price less than 800
                  </label>
                  <label className="input-label">
                    <Input type="radio" />
                    price less than 900
                  </label>
                </div>
              )}
            </div>
            <hr />
            <div className='filter-size'>
              <div>
                <h3>
                  Size{' '}
                  <span
                    className="upward-arrow"
                    onClick={handleSizeClose}
                    style={{ float: 'right', cursor: 'pointer' }}
                  >
                    {sizeBodyVisible ? '^' : 'v'}
                  </span>
                </h3>
              </div>
              {sizeBodyVisible && (
                <div className='size-body'>
                  <label className="input-label">
                    <Input type="checkbox" />
                    XS
                  </label>
                  <label className="input-label">
                    <Input type="checkbox" />
                    S
                  </label>
                  <label className="input-label">
                    <Input type="checkbox" />
                    M
                  </label>
                  <label className="input-label">
                    <Input type="checkbox" />
                    L
                  </label>
                  <label className="input-label">
                    <Input type="checkbox" />
                    XL
                  </label>
                  <label className="input-label">
                    <Input type="checkbox" />
                    XXL
                  </label>
                </div>
              )}
            </div>
            <hr />
            <div className='filter-availability'>
              <div>
                <h3>
                  Availability{' '}
                  <span
                    className="upward-arrow"
                    onClick={handleAvailabilityClose}
                    style={{ float: 'right', cursor: 'pointer' }}
                  >
                    {availabilityBodyVisible ? '^' : 'v'}
                  </span>
                </h3>
              </div>
              {availabilityBodyVisible && (
                <div className='availability-body'>
                  <label className="input-label">
                    <Input type="checkbox" />
                    In Stock
                  </label>
                  <label className="input-label">
                    <Input type="checkbox" />
                    Out of Stock
                  </label>
                </div>
              )}
            </div>
            <hr />
          </div>
          <div className='body-right'>
            {/* Check if categoryResult is null or empty */}
            {categoryResult && categoryResult.length > 0 ? (
              // Render search results if categoryResult is not null and has items
              categoryResult.map((result) => (
                <div key={result.id} style={{ width: "25%", padding: "1rem", paddingTop: "0" }}>
                  <ProductCard className="filter-card" />
                  <div>
                    <p>{result}</p> {/* Assuming result has a 'name' property */}
                    <p>{result}</p> {/* Assuming result has a 'description' property */}
                  </div>
                </div>
              ))
            ) : (
              // Render default behavior if categoryResult is null or empty
              <>
                <div style={{ width: "25%", padding: "1rem", paddingTop: "0" }}>
                  <ProductCard className="filter-card" />
                  <div>
                    <p>Product 1</p>
                    <p>Product description</p>
                  </div>
                </div>
                {/* Additional default behavior components */}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
