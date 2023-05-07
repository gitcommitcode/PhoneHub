import React from 'react'
import './Card.css'
export default function Card() {
  return (
    <>
        <div className="container shoe" >
                <div className="productImage shoeImg"></div>
                <div className="size shoeSize">
                    <h4>SIZE</h4>
                    <ul>
                        <li>64GB</li>
                        <li>128GB</li>
                        <li>256GB</li>
                    </ul>
                </div>
                <div className="price shoePrice">
                    <h4>PRICE</h4>
                    <span>$150</span>
                </div>
                <div className="color shoeColor">
                    <h4>COLORS</h4>
                    <ul>
                        <li><span className="blue"></span></li>
                        <li><span className="yellow"></span></li>
                        <li><span className="red"></span></li>
                    </ul>
                </div>
                <div className="productName shoeName">
                    iPhone 12
                </div>
            </div>
    </>
  )
}
