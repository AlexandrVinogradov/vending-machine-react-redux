import React from 'react'

class ChooseProductForm extends React.Component {
  state = {
    selectedProduct: 0,
    errorMessageIncorrect: '',
    coins: [],
    change: 0,
    isError: false,
    productInputValue: 0,
  }

  handleProductEnterClick = e => {
    e.preventDefault()

    let newChange =
      parseInt(this.props.balance) - this.props.products.find(p => p.id === this.state.productInputValue).price

    let localCoins = []
    let bills = [10, 5, 2, 1]
    let p = 0
    let i = 0
    while (p < newChange) {
      let z = Math.floor((newChange - p) / bills[i])
      localCoins.push({ [bills[i]]: z })
      p += bills[i] * z
      i++
    }

    if (
      this.props.products.some(p => p.id === this.state.productInputValue) &&
      this.props.balance >= this.props.products.find(p => p.id === this.state.productInputValue).price
    ) {
      this.setState(
        {
          selectedProduct: parseInt(this.state.productInputValue),
          errorMessageIncorrect: '',
          coins: localCoins,
          change:
            parseInt(this.props.balance) - this.props.products.find(p => p.id === this.state.productInputValue).price,
        },
        () => {
          this.props.setValuesOfChooseProductForm(this.state.selectedProduct, this.state.coins, this.state.change)
        }
      )
    } else if (
      this.props.products.some(p => p.id === this.state.productInputValue) &&
      this.props.balance < this.props.products.find(p => p.id === this.state.productInputValue).price
    ) {
      this.setState({
        isError: true,
        errorMessageIncorrect: 'Not enought money',
      })
    } else {
      this.setState({
        isError: true,
        errorMessageIncorrect: 'Enter correct number',
      })
    }
  }
  productInputValue = e => {
    this.setState({
      productInputValue: parseInt(e.currentTarget.value),
    })
  }

  render() {
    return (
      <form onSubmit={this.handleProductEnterClick}>
        <div className="dialog-board">
          <span>
            {this.state.errorMessageIncorrect ||
              (this.props.balance === 0 ? '>' : this.state.selectedProduct ? 'Success' : 'Choose product')}
          </span>
        </div>
        <input
          onInput={this.productInputValue}
          ref={this.props.productInputValueRef}
          disabled={this.state.selectedProduct || this.props.balance === 0}
        />
      </form>
    )
  }
}
export default ChooseProductForm
