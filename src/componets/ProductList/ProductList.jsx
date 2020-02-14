import React from 'react'
import PropTypes from 'prop-types'
import s from './ProductList.module.scss'

const NewProductElement = props => {
  const {name, desc, price, id} = props
  return (
    <>
      <li className={s.productList__item}>
        <div className={s.product}>
          <span className={s.product__name}>{name}</span>
          <span className={s.product__desc}> {desc}</span>
          <div className={s.product__info}>
            <span className={s.product__info_price}>{`${price} ${' R'}`}</span>
            <span className={s.product__info_name}>{id}</span>
          </div>
        </div>
      </li>
    </>
  )
}
const ProductList = props => {
  const {products} = props

  const newProductElement = products.map(p => (
    <NewProductElement id={p.id} key={p.id} name={p.name} price={p.price} desc={p.desc} />
  ))

  return (
    <div className={s.interface__goods}>
      <div className={s.inteface__goods_area}>
        <ul className={s.productList}>{newProductElement}</ul>
      </div>
    </div>
  )
}

ProductList.propTypes = {

  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  
}

NewProductElement.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
}

export default ProductList
