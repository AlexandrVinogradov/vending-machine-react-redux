import React from 'react'
import PropTypes from 'prop-types'
import s from './InsertBanknoteForm.module.scss'

class InsertBanknoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      legalPayload: [50, 100, 200, 500, 1000],
      balanceInputValue: 0,
      localIsRichest: false,
      errorMessageUnknowBanknote: '',
    }
  }

  handleBalanceEnterClick = e => {
    const { balance, products, setValuesOfInsertBanknoteForm, isRichest } = this.props
    const { legalPayload, balanceInputValue } = this.state

    e.preventDefault()
    if (legalPayload.includes(parseInt(balanceInputValue, 10))) {
      const localBalance = parseInt(balanceInputValue, 10) + parseInt(balance, 10)

      this.setState(
        {
          localIsRichest: products.every(p => p.price <= parseInt(balance, 10) + parseInt(balanceInputValue, 10)),
          errorMessageUnknowBanknote: '',
        },
        () => {
          setValuesOfInsertBanknoteForm(localBalance, isRichest)
        }
      )
    } else {
      this.setState({
        errorMessageUnknowBanknote: 'Unknow Banknote',
      })
    }
  }

  balanceInputValue = e => {
    this.setState({
      balanceInputValue: parseInt(e.currentTarget.value, 10),
    })
  }

  render() {
    const { errorMessageUnknowBanknote, localIsRichest } = this.state
    const { balance, selectedProduct, balanceInputValueRef } = this.props
    let dialogBoard

    if (errorMessageUnknowBanknote) {
      dialogBoard = errorMessageUnknowBanknote
    } else if (balance === 0) {
      dialogBoard = 'Insert banknotes...'
    } else if (localIsRichest) {
      dialogBoard = `Inserted money: ${balance} ${' R Enough for any snacks'}`
    } else {
      dialogBoard = `Inserted money: ${balance}  ${' R'}`
    }

    return (
      <form onSubmit={this.handleBalanceEnterClick} className={s.form}>
        <div className={s.dialogBoard}>
          <span>{dialogBoard}</span>
        </div>

        <p className={s.form__desc}>
          Available banknotes: 50, 100, 200, 500 or 1000 R. The machine gives change in 1, 2, 5 and 10 R coins.
        </p>

        <input
          ref={balanceInputValueRef}
          onInput={this.balanceInputValue}
          disabled={localIsRichest || selectedProduct}
        />
      </form>
    )
  }
}

InsertBanknoteForm.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,

  balanceInputValueRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]).isRequired,

  setValuesOfInsertBanknoteForm: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired,
  selectedProduct: PropTypes.number.isRequired,
  isRichest: PropTypes.number.isRequired,
}

export default InsertBanknoteForm
