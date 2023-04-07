import { useEffect, useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Products from './pages/Products/Products'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from './pages/Product-detail/ProductDetail'
import RightSide from './components/RightSide/RightSide'
import Cart from './pages/Cart/Cart'
import { useSelector } from 'react-redux'

function App() {
  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  let cart = []
  cart = useSelector((state) => state.cart)

  useEffect(() => {
    fetch('http://localhost:1330/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  useEffect(() => {
    if (cart.length) {
      let url = 'http://localhost:1330/products?'
      cart.forEach((element) => {
        url += `&id=${element.id}`
      })
      fetch(url)
        .then((res) => res.json())
        .then((data) => setCartProducts(data))
    }
  }, [cart])

  return (
    <div className="grid">
      <Header />
      <Routes>
        <Route path="/" element={<Products products={products} />} />
        <Route
          path="/product/:id"
          element={<ProductDetail products={products} />}
        />
        <Route path="/cart" element={<Cart products={cartProducts} />} />
      </Routes>
      <RightSide products={cartProducts} />
    </div>
  )
}

export default App
