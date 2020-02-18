import React from 'react'
import PropTypes from 'prop-types'
import s from './ResultForm.module.scss'

const CoinChange = props => {
  const { coins1, coins2, coins5, coins10 } = props

  return (
    <>
      {coins10 ? <div>10 R: {coins10} coins</div> : null}
      {coins5 ? <div>5 R: {coins5} coins</div> : null}
      {coins2 ? <div>2 R: {coins2} coins</div> : null}
      {coins1 ? <div>1 R: {coins1} coins</div> : null}
    </>
  )
}
const ResultForm = props => {
  const { coins, selectedProduct, foundSelectedProduct, change, takeProduct } = props

  const coinChange = coins.map(c => (
    <CoinChange key={c.index} coins10={c[10]} coins5={c[5]} coins2={c[2]} coins1={c[1]} />
  ))
  
  return (
    <div>
      <div className={s.dialogBoard}>
        <span>{selectedProduct ? 'Take your product and change' : '>'}</span>
      </div>
      <div className={s.conclusion}>
        <div className={s.product}>
          {coinChange}
          {!change && selectedProduct ? <div>No change</div> : null}
        </div>
        <div
          role="button"
          onKeyDown={takeProduct}
          tabIndex={0}
          className={`${s.product} ${s.result}`}
          onClick={takeProduct}
        >
          <span>{selectedProduct ? foundSelectedProduct.name : null}</span>
          <span>{selectedProduct ? foundSelectedProduct.desc : null}</span>
          <span>{selectedProduct ? foundSelectedProduct.price : null}</span>
          <span>{selectedProduct ? foundSelectedProduct.id : null}</span>
        </div>
      </div>
    </div>
  )
}

ResultForm.defaultProps = {
  foundSelectedProduct: null,
}
CoinChange.defaultProps = {
  coins1: null,
  coins2: null,
  coins5: null,
  coins10: null,
}
CoinChange.propTypes = {
  coins1: PropTypes.number,
  coins2: PropTypes.number,
  coins5: PropTypes.number,
  coins10: PropTypes.number,
}
ResultForm.propTypes = {
  selectedProduct: PropTypes.number.isRequired,
  takeProduct: PropTypes.func.isRequired,
  change: PropTypes.number.isRequired,

  coins: PropTypes.arrayOf(
    PropTypes.shape({
      10: PropTypes.number,
      5: PropTypes.number,
      2: PropTypes.number,
      1: PropTypes.number,
    })
  ).isRequired,

  foundSelectedProduct: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
}

export default ResultForm
