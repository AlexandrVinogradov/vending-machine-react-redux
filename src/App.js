import React from 'react';
import './App.css';
import ProductList from './componets/ProductList/ProductList';
import InsertBancnoteForm from './componets/InsertBancnoteForm/InsertBancnoteForm';
import ChooseProductForm from './componets/ChooseProductForm/ChooseProductForm';
import ResultForm from './componets/ResultForm/ResultForm';

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
    productInputValue: 0,
    balanceInputValue: 0,
    isRichest: false,
    legalPayload: [50, 100, 200, 500, 1000],
    errorMessageUnknowBancnote: '',
    errorMessageIncorrect: '',
    isError: false,
    coins: []
  }

  // ========= Insert Bancnote Form ================ 
  handleBalanceEnterClick = (e) => {
    e.preventDefault();
    if (this.state.legalPayload.includes(parseInt(this.state.balanceInputValue))) {
      this.setState({
        balance: parseInt(this.state.balanceInputValue) + parseInt(this.state.balance),
        isRichest: this.state.products.every(p => p.price <= (parseInt(this.state.balance) + parseInt(this.state.balanceInputValue))),
        errorMessageUnknowBancnote: '',
      })
    } else {
      this.setState({
        isError: true,
        errorMessageUnknowBancnote: 'Unknow bancnote'
      })
    }
  }
  balanceInputValue = (e) => {
    this.setState({
      balanceInputValue: parseInt(e.currentTarget.value),
    })
  }
  // ========= Choose Product Form ========= 
  handleProductEnterClick = (e) => {
    e.preventDefault();

    let newChange = parseInt(this.state.balance) - this.state.products.find(p => p.id === this.state.productInputValue).price

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

    if (this.state.products.some(p => p.id === this.state.productInputValue) && this.state.balance >= this.state.products.find(p => p.id === this.state.productInputValue).price) {
      this.setState({
        selectedProduct: parseInt(this.state.productInputValue),
        errorMessageIncorrect: '',
        coins: localCoins,
        change: parseInt(this.state.balance) - this.state.products.find(p => p.id === this.state.productInputValue).price
      })
    } else if (this.state.products.some(p => p.id === this.state.productInputValue) && this.state.balance < this.state.products.find(p => p.id === this.state.productInputValue).price) {
      this.setState({
        isError: true,
        errorMessageIncorrect: 'Not enought money'
      })
    } else {
      this.setState({
        isError: true,
        errorMessageIncorrect: 'Enter correct number'
      })
    }
  }
  productInputValue = (e) => {
    this.setState({
      productInputValue: parseInt(e.currentTarget.value),
    })
  }
  // ========= Result Form ========= 
  takeProduct = () => {
    window.location.reload();
  }

  render() {
    const foundSelectedProduct = this.state.products.find(p => p.id === this.state.selectedProduct)
    
    return <div className='interface'>
      <ProductList products={this.state.products} />

      <div className='interface__control-panel'>
        <InsertBancnoteForm handleBalanceEnterClick={this.handleBalanceEnterClick}
          errorMessageUnknowBancnote={this.state.errorMessageUnknowBancnote}
          balance={this.state.balance}
          balanceInputValue={this.balanceInputValue}
          isRichest={this.state.isRichest}
          selectedProduct={this.state.selectedProduct} />

        <ChooseProductForm handleProductEnterClick={this.handleProductEnterClick}
          errorMessageIncorrect={this.state.errorMessageIncorrect}
          balance={this.state.balance}
          selectedProduct={this.state.selectedProduct}
          productInputValue={this.productInputValue} />

        <ResultForm selectedProduct={this.state.selectedProduct}
          change={this.state.change}
          takeProduct={this.takeProduct}
          foundSelectedProduct={foundSelectedProduct}
          coins={this.state.coins} />
      </div>
    </div>
  }
}
export default App;
