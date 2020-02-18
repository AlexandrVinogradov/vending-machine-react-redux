import React from 'react'
import PropTypes from 'prop-types'
import s from './ChooseProductForm.module.scss'

class ChooseProductForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedProduct: 0,
      errorMessage: '',
      coins: [],
      change: 0,
      isError: false,
      productInputValue: 0,
      mycoins: [],
    }
  }

  handleProductEnterClick = e => {
    e.preventDefault()

    const { products, balance, setValuesOfChooseProductForm } = this.props
    const { productInputValue, mycoins } = this.state

    if (
      products.some(p => p.id === productInputValue) &&
      balance >= products.find(p => p.id === productInputValue).price
    ) {
      this.setState(
        {
          selectedProduct: parseInt(productInputValue, 10),
          errorMessage: '',
          coins: mycoins,
          change: parseInt(balance, 10) - products.find(p => p.id === productInputValue).price,
          isError: false,
          productInputValue: 0,
        },
        () => {
          const { selectedProduct, coins, change } = this.state
          setValuesOfChooseProductForm(selectedProduct, coins, change)
        }
      )
    } else if (
      products.some(p => p.id === productInputValue) &&
      balance < products.find(p => p.id === productInputValue).price
    ) {
      this.setState({
        isError: true,
        errorMessage: 'Not enought money',
      })
    } else {
      this.setState({
        isError: true,
        errorMessage: 'Enter correct number',
      })
    }
  }

  changeCounter = () => {
    const { productInputValue } = this.state
    const { products, balance } = this.props

    if (products.some(p => p.id === productInputValue)) {
      const newChange = parseInt(balance, 10) - products.find(p => p.id === productInputValue).price
      const localCoins = []
      const bills = [10, 5, 2, 1]

      let p = 0
      let i = 0
      while (p < newChange) {
        const z = Math.floor((newChange - p) / bills[i])
        localCoins.push({ [bills[i]]: z })
        p += bills[i] * z
        i += 1
      }
      this.setState({ mycoins: localCoins })
    }
  }

  productInputValue = e => {
    this.setState(
      {
        productInputValue: parseInt(e.currentTarget.value, 10),
      },
      () => {
        this.changeCounter()
      }
    )
  }

  render() {
    const {
      // errorMessageIncorrect,
      balance,
      selectedProduct,
      productInputValueRef,
    } = this.props
    const { errorMessage, isError } = this.state

    let dialogBoard

    // if (errorMessageIncorrect) {
    //   dialogBoard = errorMessageIncorrect
    // } else
    if (balance === 0) {
      dialogBoard = '>'
    } else if (isError) {
      dialogBoard = errorMessage
    } else if (selectedProduct) {
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
          ref={productInputValueRef}
          disabled={selectedProduct || balance === 0}
        />
      </form>
    )
  }
}

ChooseProductForm.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,

  productInputValueRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]).isRequired,

  balance: PropTypes.number.isRequired,
  setValuesOfChooseProductForm: PropTypes.func.isRequired,
  // errorMessageIncorrect: PropTypes.string.isRequired,
  selectedProduct: PropTypes.number.isRequired,
}

export default ChooseProductForm
