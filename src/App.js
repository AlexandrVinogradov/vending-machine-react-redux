import React from 'react';
import './App.css';
import ProductList from './componets/ProductList/ProductList';
import InsertBancnoteForm from './componets/InsertBancnoteForm/InsertBancnoteForm';
import ChooseProductForm from './componets/ChooseProductForm/ChooseProductForm';
import ResultForm from './componets/ResultForm/ResultForm';

class App extends React.Component {
  state = {
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
    products: [
      { name: 'Oreo', price: 80, desc: 'Cookie', id: 1 },
      { name: 'Milka', price: 140, desc: 'Chocolate', id: 2 },
      { name: 'M&M', price: 200, desc: 'Candy', id: 3 },
      { name: 'Twix', price: 90, desc: 'Choco bar', id: 4 },
      { name: 'Mentos', price: 50, desc: 'Chewing pills', id: 5 },
      { name: 'Mountain dew', price: 170, desc: 'Cold drink', id: 6 },
    ],
    coins: []
  }
  // componentDidUpdate(prevState) {
  //   let coins = []
  //   let money = 57
  //   let bills = [10, 5, 2, 1]
  //   let p = 0
  //   let i = 0
  //    while (p<this.state.change) {
  //     let z = Math.floor((this.state.change-p)/bills[i])
  //       coins.push(z)
  //       p += bills[i] * z 
  //       i++
  //       console.log(coins);
  //    }
  // }

  render() {
    const foundSelectedProduct = this.state.products.find(p => p.id === this.state.selectedProduct)
    const foundInputSelectedProduct = this.state.products.find(p => p.id === this.state.productInputValue)
    const foundMaxPrice = this.state.products.every(p => p.price <= (parseInt(this.state.balance) + parseInt(this.state.balanceInputValue)))

{/* =========Insert Bancnote Form================ */}
    const handleBalanceEnterClick = (e) => {
      e.preventDefault();
      if (this.state.legalPayload.includes(parseInt(this.state.balanceInputValue))) {
        this.setState({
          balance: parseInt(this.state.balanceInputValue) + parseInt(this.state.balance),
          isRichest: foundMaxPrice,
          errorMessageUnknowBancnote: '',
        })
      } else {
        this.setState({
          isError: true,
          errorMessageUnknowBancnote: 'Unknow bancnote'
        })
      }
    }
    const balanceInputValue = (e) => {
      this.setState({
        balanceInputValue: parseInt(e.currentTarget.value),
      })
    }
{/* =======ChooseProductForm======= */}
    const handleProductEnterClick = (e) => {
      e.preventDefault();
      if (this.state.products.some(p => p.id === this.state.productInputValue) && this.state.balance >= foundInputSelectedProduct.price) {
        this.setState({
          selectedProduct: parseInt(this.state.productInputValue),
          errorMessageIncorrect: '',
          change: parseInt(this.state.balance) - foundInputSelectedProduct.price
        })
      } else if (this.state.products.some(p => p.id === this.state.productInputValue) && this.state.balance < foundInputSelectedProduct.price) {
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
    const productInputValue = (e) => {
      this.setState({
        productInputValue: parseInt(e.currentTarget.value),
      })
    }
{/* =======ResultForm======= */}
    const takeProduct = () => {
      this.setState({
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
      })
    }
    return <div className='interface'>
      <ProductList products={this.state.products}/>
      <div className='interface__control-panel'>
        
        <InsertBancnoteForm handleBalanceEnterClick={handleBalanceEnterClick} 
        errorMessageUnknowBancnote={this.state.errorMessageUnknowBancnote}
        balance={this.state.balance}
        balanceInputValue={balanceInputValue}
        isRichest={this.state.isRichest} 
        selectedProduct={this.state.selectedProduct}/>

        <ChooseProductForm handleProductEnterClick={handleProductEnterClick} 
        errorMessageIncorrect={this.state.errorMessageIncorrect}
        balance={this.state.balance}
        selectedProduct={this.state.selectedProduct}
        productInputValue={productInputValue}/>

        <ResultForm selectedProduct={this.state.selectedProduct}
        change={this.state.change}
        takeProduct={takeProduct}
        foundSelectedProduct={foundSelectedProduct} />
      </div>
    </div>
  }
}
export default App;
