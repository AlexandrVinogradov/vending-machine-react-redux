import React from 'react'
import './App.css'
import ProductList from './componets/ProductList/ProductList'
import InsertBanknoteForm from './componets/InsertBanknoteForm/InsertBanknoteForm'
import ChooseProductForm from './componets/ChooseProductForm/ChooseProductForm'
import ResultForm from './componets/ResultForm/ResultForm'

class App extends React.Component {
  state = {
    products: [
      { name: 'Oreo', price: 80, desc: 'Cookie', id: 1 },
      { name: 'Milka', price: 140, desc: 'Chocolate', id: 2 },
      { name: 'M&M', price: 200, desc: 'Candy', id: 3 },
      { name: 'Twix', price: 91, desc: 'Choco bar', id: 4 },
      { name: 'Mentos', price: 50, desc: 'Chewing pills', id: 5 },
      { name: 'Mountain dew', price: 170, desc: 'Cold drink', id: 6 },
    ],
    change: 0,
    balance: 0,
    selectedProduct: 0,
    coins: [],
    isRichest: 0,
  }
  constructor(props) {
    super(props)
    this.productInputValueRef = React.createRef()
    this.balanceInputValueRef = React.createRef()
  }
  // ========= Insert Banknote Form ================
  setValuesOfInsertBanknoteForm = (balance, isRichest) => {
    this.setState({ balance, isRichest })
  }
  // ========= Choose Product Form =========
  setValuesOfChooseProductForm = (selectedProduct, coins, change) => {
    this.setState({ selectedProduct, coins, change })
  }
  // ========= Result Form =========
  takeProduct = () => {
    this.productInputValueRef.current.value = ''
    this.balanceInputValueRef.current.value = ''
    this.setState({
      change: 0,
      balance: 0,
      selectedProduct: 0,
      coins: [],
      isRichest: 0,
    })
  }

  render() {
    const foundSelectedProduct = this.state.products.find(p => p.id === this.state.selectedProduct)

    return (
      <div className="interface">
        <ProductList products={this.state.products} />

        <div className="interface__control-panel">
          <InsertBanknoteForm
            selectedProduct={this.state.selectedProduct}
            balanceInputValueRef={this.balanceInputValueRef}
            products={this.state.products}
            setValuesOfInsertBanknoteForm={this.setValuesOfInsertBanknoteForm}
            balance={this.state.balance}
            isRichest={this.state.isRichest}
          />

          <ChooseProductForm
            selectedProduct={this.state.selectedProduct}
            balance={this.state.balance}
            productInputValueRef={this.productInputValueRef}
            products={this.state.products}
            setValuesOfChooseProductForm={this.setValuesOfChooseProductForm}
          />

          <ResultForm
            selectedProduct={this.state.selectedProduct}
            change={this.state.change}
            takeProduct={this.takeProduct}
            foundSelectedProduct={foundSelectedProduct}
            coins={this.state.coins}
          />
        </div>
      </div>
    )
  }
}
export default App
