import React from 'react';

const CoinChange = props => {
  return<>
    {props.coins10 ? <div>10 R: {props.coins10} coins</div> : null}
    {props.coins5 ? <div>5 R: {props.coins5} coins</div> : null}
    {props.coins2 ? <div>2 R: {props.coins2} coins</div> : null}
    {props.coins1 ? <div>1 R: {props.coins1} coins</div> : null}
  </>
}
const ResultForm = props => {

  const coinChange = props.coins.map(c => <CoinChange key={c.index} coins10={c[10]} coins5={c[5]} coins2={c[2]} coins1={c[1]} />)

  return <div>
      <div className='dialog-board'>
        <span>{props.selectedProduct ? 'Take your product and change' : '>'}</span>
      </div>
      <div className='conclusion'>
        <div className='product'>
          {coinChange}
          {!props.change && props.selectedProduct ? <div>No change</div> : null}
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