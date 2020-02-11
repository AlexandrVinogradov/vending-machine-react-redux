import React from 'react'
import s from './ProductList.module.scss'

const NewProductElement = props => {
  return (
    <>
      <li className={s.productList__item}>
        <div className={s.product}>
          {/* or doesnt need? */}
          <span className={s.product__name}>{props.name}</span>
          <span className={s.product__desc}>{props.desc}</span>
          <span className={s.product__prise}>{props.price + ' R'}</span>
          <span className={s.product__name}>{props.id}</span>
        </div>
      </li>
    </>
  )
}
const ProductList = props => {
  const newProductElement = props.products.map(p => (
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
export default ProductList
