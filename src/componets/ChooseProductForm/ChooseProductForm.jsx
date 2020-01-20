import React from 'react';

const ChooseProductForm = props => {
  return <>
    <form onSubmit={props.handleProductEnterClick}>
      <div className='dialog-board'>
        <span>
          {props.errorMessageIncorrect ? props.errorMessageIncorrect :
            props.balance === 0 ? '>' :
              props.selectedProduct ? 'Success' : 'Choose product'}
        </span>
      </div>
      <input onInput={props.productInputValue} disabled={props.selectedProduct || props.balance === 0} />
    </form>
  </>
}
export default ChooseProductForm;