import React from 'react'

class InsertBanknoteForm extends React.Component {
  state = {
    legalPayload: [50, 100, 200, 500, 1000],
    balanceInputValue: 0,
    balance: 0,
    isRichest: false,
    errorMessageUnknowBanknote: '',
    isError: false,
  }

  handleBalanceEnterClick = e => {
    e.preventDefault()
    if (this.state.legalPayload.includes(parseInt(this.state.balanceInputValue))) {
      this.setState(
        {
          balance: parseInt(this.state.balanceInputValue) + parseInt(this.state.balance),
          isRichest: this.props.products.every(
            p => p.price <= parseInt(this.state.balance) + parseInt(this.state.balanceInputValue)
          ),
          errorMessageUnknowBanknote: '',
        },
        () => {
          this.props.setValuesOfInsertBanknoteForm(this.state.balance)
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
    return (
      <form onSubmit={this.handleBalanceEnterClick} className="form">
        <div className="dialog-board">
          <span>
            {this.state.errorMessageUnknowBanknote ||
              (this.props.balance === 0
                ? 'Insert banknotes...'
                : this.state.isRichest
                ? `Inserted money: ${this.state.balance + ' R Enough for any snacks'}`
                : `Inserted money: ${this.state.balance + ' R'}`)}
          </span>
        </div>

        <input
          ref={this.props.balanceInputValueRef}
          onInput={this.balanceInputValue}
          disabled={this.state.isRichest || this.props.selectedProduct}
        />

        <p className="form__desc">
          Available banknotes: 50, 100, 200, 500 or 1000 R. The machine gives change in 1, 2, 5 and 10 R coins.
        </p>
      </form>
    )
  }
}
export default InsertBanknoteForm
