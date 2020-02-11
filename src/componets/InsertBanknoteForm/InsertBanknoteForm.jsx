import React from 'react'
import s from './InsertBanknoteForm.module.scss'

class InsertBanknoteForm extends React.Component {
  state = {
    legalPayload: [50, 100, 200, 500, 1000],
    balanceInputValue: 0,
    isRichest: false,
    errorMessageUnknowBanknote: '',
    isError: false,
  }

  handleBalanceEnterClick = e => {
    e.preventDefault()
    if (this.state.legalPayload.includes(parseInt(this.state.balanceInputValue))) {
      let balance = parseInt(this.state.balanceInputValue) + parseInt(this.props.balance)

      this.setState(
        {
          isRichest: this.props.products.every(
            p => p.price <= parseInt(this.props.balance) + parseInt(this.state.balanceInputValue)
          ),
          errorMessageUnknowBanknote: '',
        },
        () => {
          this.props.setValuesOfInsertBanknoteForm(balance, this.state.isRichest)
        }
      )
    } else {
      this.setState({
        isError: true,
        errorMessageUnknowBanknote: 'Unknow Banknote',
      })
    }
  }
  balanceInputValue = e => {
    this.setState({
      balanceInputValue: parseInt(e.currentTarget.value),
    })
  }

  render() {
    let dialogBoard

    if (this.state.errorMessageUnknowBanknote) {
      dialogBoard = this.state.errorMessageUnknowBanknote
    } else if (this.props.balance === 0) {
      dialogBoard = 'Insert banknotes...'
    } else if (this.state.isRichest) {
      dialogBoard = `Inserted money: ${this.props.balance + ' R Enough for any snacks'}`
    } else {
      dialogBoard = `Inserted money: ${this.props.balance + ' R'}`
    }

    return (
      <form onSubmit={this.handleBalanceEnterClick} className="form">
        <div className={s.dialogBoard}>
          <span>{dialogBoard}</span>
        </div>

        <input
          ref={this.props.balanceInputValueRef}
          onInput={this.balanceInputValue}
          disabled={this.props.isRichest || this.props.selectedProduct}
        />

        <p className={s.form__desc}>
          Available banknotes: 50, 100, 200, 500 or 1000 R. The machine gives change in 1, 2, 5 and 10 R coins.
        </p>
      </form>
    )
  }
}
export default InsertBanknoteForm
