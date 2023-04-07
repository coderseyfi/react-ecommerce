import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './product-detail.scss'
import bagBtn from '../../assets/icons/bagButton.svg'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
    fetch(`http://localhost:1330/products/${id}`)
      .then((a) => a.json())
      .then((a) => setProduct(a))
  }, [])

  return (
    <section className="detail">
      <div className="container">
        <div className="top">
          <div className="top__left">
            <div className="left-imgs">
              <div className="lit-img">
                {product?.image && <img src={product.image} alt="asdf" />}
              </div>
              <div className="lit-img">
                {product?.image && <img src={product.image} alt="asdf" />}
              </div>
              <div className="lit-img">
                {product?.image && <img src={product.image} alt="asdf" />}
              </div>
            </div>
            <div className="right-img">
              {product?.image && <img src={product.image} alt="asdf" />}
            </div>
          </div>
          <div className="top__right">
            <h1 className="cap">{product.name}</h1>
            <p className="item-model">{product.model}</p>
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
            <p className="price">${product.price}</p>
            <p className="info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              illum iusto molestiae incidunt dolorem minima dolore ab, omnis ut
              fugiat id perspiciatis non tempore ipsam nemo qui, iure deserunt
              quidem sed minus explicabo labore. Quo, sint. Reiciendis
              perferendis commodi aliquam.
            </p>
            <button className="bagBtn">
              <Link>
                <img src={bagBtn} alt="" />
              </Link>
            </button>
          </div>
        </div>
        <hr className="line" />
        <div className="bottom">
          <h2 className="desc">Description</h2>
          <p className="bottom__par">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            voluptate tenetur enim exercitationem culpa. Ut a culpa amet
            provident nam, doloremque voluptatum minus reprehenderit quo nostrum
            aperiam possimus. Eum cum consequuntur ipsam rem quos iste maiores
            numquam quidem neque officia et beatae, sapiente iure itaque,
            voluptatum possimus dolor assumenda perferendis! Hic, eos deleniti
            itaque rem earum voluptatum! Fugit dignissimos aut error optio
            perspiciatis inventore soluta culpa! Dignissimos, ab. Sint possimus,
            eum commodi facere ipsam sunt itaque magni quasi pariatur iste sed
            temporibus inventore, adipisci amet voluptatem necessitatibus
            dolores nam laudantium, ea atque ratione vero? Consequatur animi nam
            velit veritatis quae debitis voluptatem ea provident quibusdam
            officia dolorum culpa, repellat quas in dignissimos ex veniam
            obcaecati soluta architecto impedit libero deleniti? Voluptatibus,
            quaerat molestias expedita nostrum atque accusamus nulla,
            perferendis debitis illum impedit sunt nemo ea quia quidem quisquam
            adipisci. Voluptatem adipisci itaque odit! Animi iure voluptas
            deleniti repellendus nesciunt? Rerum ipsa vero aperiam, aspernatur
            ea quia incidunt tempora totam excepturi, hic recusandae error
            suscipit praesentium perspiciatis atque aut quidem ex illum magni
            perferendis explicabo repellendus. Distinctio iste velit vero
            sapiente adipisci provident, laboriosam illo. Eius repellendus
            quidem modi eveniet delectus autem, reiciendis iste sit maiores
            inventore placeat atque ullam. Harum.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
