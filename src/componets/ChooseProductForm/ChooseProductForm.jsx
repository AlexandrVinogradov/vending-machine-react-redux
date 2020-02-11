import React from 'react'
import s from './ChooseProductForm.module.scss'

class ChooseProductForm extends React.Component {
  state = {
    selectedProduct: 0,
    errorMessageIncorrect: '',
    coins: [],
    change: 0,
    isError: false,
    productInputValue: 0,
    mycoins: [],
  }

  handleProductEnterClick = e => {
    e.preventDefault()

    if (
      this.props.products.some(p => p.id === this.state.productInputValue) &&
      this.props.balance >= this.props.products.find(p => p.id === this.state.productInputValue).price
    ) {
      this.setState(
        {
          selectedProduct: parseInt(this.state.productInputValue),
          errorMessageIncorrect: '',
          coins: this.state.mycoins,
          change:
            parseInt(this.props.balance) - this.props.products.find(p => p.id === this.state.productInputValue).price,
          isError: false,
          productInputValue: 0,
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
    this.setState(
      {
        productInputValue: parseInt(e.currentTarget.value),
      },
      () => {
        if (this.props.products.some(p => p.id === this.state.productInputValue)) {
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
          this.setState({ mycoins: localCoins })
        }
      }
    )
  }

  render() {
    let dialogBoard

    if (this.props.errorMessageIncorrect) {
      dialogBoard = this.props.errorMessageIncorrect
    } else if (this.props.balance === 0) {
      dialogBoard = '>'
    } else if (this.state.isError) {
      dialogBoard = this.state.errorMessageIncorrect
    } else if (this.props.selectedProduct) {
      dialogBoard = 'Success'
    } else {
      dialogBoard = 'Choose product'
    }

    return (
      <form onSubmit={this.handleProductEnterClick} className={s.form}>
        <div className={s.dialogBoard}>
          <span>{dialogBoard}</span>
        </div>
        <input
          onInput={this.productInputValue}
          ref={this.props.productInputValueRef}
          disabled={this.props.selectedProduct || this.props.balance === 0}
        />
      </form>
    )
  }
}
export default ChooseProductForm
