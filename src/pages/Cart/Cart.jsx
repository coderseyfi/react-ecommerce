import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Cart = ({ products }) => {
  return (
    <div>
      <h1>Check Your Bag Items</h1>
      {products.map((item) => {
        return (
          <div className="cart_item">
            <img src={item.image} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default Cart
