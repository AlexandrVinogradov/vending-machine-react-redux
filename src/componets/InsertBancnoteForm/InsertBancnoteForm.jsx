import React from 'react';
import '../../App.css';

const InsertBancnoteForm = props => {
  return <>
    <form onSubmit={props.handleBalanceEnterClick} className='form'>
      <div className='dialog-board'>
        <span>{props.errorMessageUnknowBancnote ? props.errorMessageUnknowBancnote :
          props.balance === 0 ? 'Insert banknotes...' :
            props.isRichest ? `Inserted money: ${props.balance + ' R Enough for any snacks'}` :
              `Inserted money: ${props.balance + ' R'}`}</span>
      </div>

      <input onInput={props.balanceInputValue} disabled={props.isRichest || props.selectedProduct} />

      <p className='form__desc'>Available banknotes: 50, 100,
        200, 500 or 1000 R.
        The machine gives change
          in 1, 2, 5 and 10 R coins.</p>
    </form>
  </>
}
export default InsertBancnoteForm;