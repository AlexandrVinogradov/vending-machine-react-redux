import React from 'react';
import '../../App.css';

const ResultForm = props => {
  return <div>
      <div className='dialog-board'>

        <span>{props.selectedProduct ? 'Take your product and change' : '>'}</span>

      </div>
      <div className='conclusion'>
        <div className='product'>
          <span>{props.change ? props.change + ' R' : null} </span>
        </div>
        <div className='product result' onClick={props.takeProduct} >
          <span>{props.selectedProduct ? props.foundSelectedProduct.name : null}</span>
          <span>{props.selectedProduct ? props.foundSelectedProduct.desc : null}</span>
          <span>{props.selectedProduct ? props.foundSelectedProduct.price : null}</span>
          <span>{props.selectedProduct ? props.foundSelectedProduct.id : null}</span>
        </div>
      </div>
    </div>
}
export default ResultForm;