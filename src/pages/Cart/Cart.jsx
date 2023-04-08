import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './cart.scss'

const Cart = ({ products }) => {
  const cart = useSelector((state) => state.cart)
  let itemQuantity
  return (
    <section className="cart">
      <h1>Check Your Bag Items</h1>
      {products.map((item) => {
        cart.forEach((cartItem) => {
          cartItem.id == item.id ? (itemQuantity = cartItem.quantity) : null
        })

        return (
          <div className="cart__item">
            <div className="left">
              <img src={item.image} alt="" />
            </div>
            <div className="right">
              <h3 className="right__name">{item.name}</h3>
              <span className="right__model">{item.model}</span>
              <p className="right__desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                dolor.
              </p>
              <div className="rate-box">
                <div className="star-box">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <span className="rate-num">5/5</span>
              </div>
              <div className="right__price">
                <p className="item-price">
                  {`$${item.price}  x`}{' '}
                  <span className="span">{itemQuantity}</span>
                </p>
                <input className="input" type="number" value={1} min={0} />
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Cart
