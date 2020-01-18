import React from 'react';
import './App.css';


class App extends React.Component {

  state = {
    change: 0,
    balance: 0,
    selectedProduct: 0,

    productInputValue: 0,
    balanceInputValue: 0,

    legalPayload: [50, 100, 200, 500, 1000],
    // correctProductId: [1, 2, 3, 4, 5, 6],
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
  }

  render() {
    let money = 57
    let bills = [10, 5, 2, 1]
    let p = 0
     while (p === money) {
      let i = 0
      let z = Math.floor((money-p)/bills[i]) 
      p += bills[i] * z 
      i++
     } 
     console.log(p);

    //======================================================================
    // var bills = [5, 10, 20, 50, 100];
    // var money = mod(89);
    
    // function mod(num){
    //     if (num % 5 === 0){
    //         return num;
    //     }else{
    //         return num + 5 - num % 5
    //     }
    // }
    
    // function foo(num){
    //     var index = bills.length - 1;
    //     var splits = [];
    //     while (money >= bills[0]){
    //         if (money >= bills[index]){
    //            money -= bills[index];
    //            splits.push(bills[index]);
    //         }else{
    //             index--;
    //         }
    //     }
    //     return splits;
    // }
    // console.log(foo(money));

    //====================================================================
    // const makeChange = (change) => {
    //   if (change < 0)
    //     return Number.MAX_VALUE;
    
    //   if (change === 1 || change === 2 || change === 5 || change === 10) {
    //     return 1;
    //   }
    
    //   let min1 = makeChange(change - 1);
    //   let min2 = makeChange(change - 2);
    //   let min5 = makeChange(change - 5);
    //   let min10 = makeChange(change - 10);
    
    //   return Math.min(min1, min2, min5, min10) + 1;
    // }
    //console.log(makeChange(100));

    const foundSelectedProduct = this.state.products.find(p => p.id === this.state.selectedProduct)
    const foundInputSelectedProduct = this.state.products.find(p => p.id === this.state.productInputValue)

    const handleBalanceEnterClick = (e) => {
      e.preventDefault();
      if (this.state.legalPayload.includes(parseInt(this.state.balanceInputValue))) {
        this.setState({
          balance: parseInt(this.state.balanceInputValue) + parseInt(this.state.balance),
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
        balanceInputValue: e.currentTarget.value
      })
    }

    // console.log(this.state.selectedProduct ? foundInputSelectedProduct.price : null);
    // console.log(this.state.change);

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
        productInputValue: parseInt(e.currentTarget.value)
      })
    }
    const takeProduct = () => {
      this.setState({
        balance: 0
      })
    }

    const NewProductElement = props => {
      return <>
        <li className='product-list__item'>
            <div className='product'>
              <span className='product__name'>{props.name}</span>
              <span className='product__desc'>{props.desc}</span>
              <span className='product__prise'>{props.price}</span>
              <span className='product__name'>{props.id}</span>
            </div>
          </li>
      </>
    }
    const newProductElement = this.state.products.map( p => <NewProductElement id={p.id} key={p.id} name={p.name} price={p.price} desc={p.desc} /> )

    return <div className='interface'>
      <div className='inteface__goods'>
        <ul className='product-list'>
        {newProductElement}
        </ul>
      </div>

      <div className='interface__control-panel'>
        <form onSubmit={handleBalanceEnterClick} className='form'>
          <div className='dialog-board'>
            <span>{this.state.errorMessageUnknowBancnote ? this.state.errorMessageUnknowBancnote : this.state.balance === 0 ? 'Insert banknotes...' : `Inserted money: ${this.state.balance}`}</span>
          </div>

          <input onInput={balanceInputValue} disabled={this.state.balance > 499 || this.state.selectedProduct} />

          <p className='form__desc'>Available banknotes: 50, 100,
            200, 500 or 1000 R.
            The machine gives change
            in 1, 2, 5 and 10 R coins.</p>
        </form>
        <form onSubmit={handleProductEnterClick}>
          <div className='dialog-board'>
            <span>{this.state.errorMessageIncorrect ? this.state.errorMessageIncorrect :
             this.state.balance === 0 ? '>' : 
             this.state.selectedProduct ? 'Success' : 'Choose product'}</span>
          </div>


          <input onInput={productInputValue} disabled={this.state.selectedProduct || this.state.balance === 0} />


        </form>
        <div>
          <div className='dialog-board'>
            <span>Take your product and change</span>
          </div>
          <div className='conclusion'>
            <div className='product'>
              <span>10R <br /> 30 Coins</span>
            </div>
            <div className='product' onClick={takeProduct}>
              <span>{this.state.selectedProduct ? foundSelectedProduct.name : null}</span>
              <span>{this.state.selectedProduct ? foundSelectedProduct.desc : null}</span>
              <span>{this.state.selectedProduct ? foundSelectedProduct.price : null}</span>
              <span>{this.state.selectedProduct ? foundSelectedProduct.id : null}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}


export default App;
