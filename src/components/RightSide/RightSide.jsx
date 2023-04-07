import React from 'react'
import './rightside.scss'
import bagBtn from '../../assets/icons/bagButton.svg'
import { Link } from 'react-router-dom'

const RightSide = ({ products }) => {
  return (
    <section className="right-side">
      <h1 className="right-cap">Bag</h1>
      <div className="pr-wrapper">
        {products.map((item, index) => (
          <div className="item" key={index}>
            <img className="item__img" src={item.image} alt="pr-img" />
          </div>
        ))}
        <Link className="bottom-icon" style={{ marginTop: 10 }}>
          <img src={bagBtn} alt="bag" />
        </Link>
      </div>
    </section>
  )
}

export default RightSide
