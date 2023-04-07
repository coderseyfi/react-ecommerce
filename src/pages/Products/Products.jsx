import React from 'react'
import Search from '../../components/Search/Search'
import './products.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'

const Products = ({ products }) => {
  const dispatch = useDispatch()

  return (
    <section className="products">
      <Search />
      <div className="wrapper">
        {products.map((item) => (
          <div className="item" key={item.id}>
            <div className="img-box" style={{ position: 'relative' }}>
              {item.image ? <img src={item.image} alt="" /> : null}
              <Link
                className="item-link"
                to={`/product/${item.id}`}
                key={item.id}
              ></Link>
            </div>
            <div className="info">
              <h3 className="info__name">{item.name}</h3>
              <p className="info__model">{item.model}</p>
              <div className="price-box">
                <span>${item.price}</span>
                {item.icon && (
                  <img
                    src={item.icon}
                    onMouseDown={() => {
                      dispatch(addToCart({ id: item.id }))
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
