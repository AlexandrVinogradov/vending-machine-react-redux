import React from 'react'
import './App.scss'
import ProductList from './componets/ProductList/ProductList'
import InsertBanknoteForm from './componets/InsertBanknoteForm/InsertBanknoteForm'
import ChooseProductForm from './componets/ChooseProductForm/ChooseProductForm'
import ResultForm from './componets/ResultForm/ResultForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.productInputValueRef = React.createRef()
    this.balanceInputValueRef = React.createRef()

    this.state = {
      products: [
        { name: 'Oreo', price: 80, desc: 'Cookie', id: 1 },
        { name: 'Milka', price: 140, desc: 'Chocolate', id: 2 },
        { name: 'M&M', price: 200, desc: 'Candy', id: 3 },
        { name: 'Twix', price: 91, desc: 'Choco bar', id: 4 },
        { name: 'Durex', price: 650, desc: 'Condoms', id: 5 },
        { name: 'Mentos', price: 50, desc: 'Chewing pills', id: 6 },
        { name: 'Mountain dew', price: 170, desc: 'Cold drink', id: 7 },
      ],
      change: 0,
      balance: 0,
      selectedProduct: 0,
      coins: [],
      isRichest: 0,
    }
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
    const { products, selectedProduct, balance, isRichest, change, coins } = this.state
    const foundSelectedProduct = products.find(p => p.id === selectedProduct)

    return (
      <div className="interface">
        <ProductList products={products} />

        <div className="interface__control-panel">
          <InsertBanknoteForm
            selectedProduct={selectedProduct}
            balanceInputValueRef={this.balanceInputValueRef}
            products={products}
            setValuesOfInsertBanknoteForm={this.setValuesOfInsertBanknoteForm}
            balance={balance}
            isRichest={isRichest}
          />
          <ChooseProductForm
            selectedProduct={selectedProduct}
            balance={balance}
            productInputValueRef={this.productInputValueRef}
            products={products}
            setValuesOfChooseProductForm={this.setValuesOfChooseProductForm}
          />
          <ResultForm
            selectedProduct={selectedProduct}
            change={change}
            takeProduct={this.takeProduct}
            foundSelectedProduct={foundSelectedProduct}
            coins={coins}
          />
        </div>
      </div>
    )
  }
}
export default App
