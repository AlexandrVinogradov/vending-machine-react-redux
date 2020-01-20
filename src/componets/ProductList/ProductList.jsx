import React from 'react';

const NewProductElement = props => {

  return <>
    <li className='product-list__item'>
      <div className='product'>
        <span className='product__name'>{props.name}</span>
        <span className='product__desc'>{props.desc}</span>
        <span className='product__prise'>{props.price + ' R'}</span>
        <span className='product__name'>{props.id}</span>
      </div>
    </li>
  </>
}
const ProductList = (props) => {
  const newProductElement = props.products.map(p => <NewProductElement id={p.id} key={p.id} name={p.name} price={p.price} desc={p.desc} />)

  return <div className='interface'>
    <div className='inteface__goods'>
      <ul className='product-list'>
        {newProductElement}
      </ul>
    </div>
  </div>
}
export default ProductList;