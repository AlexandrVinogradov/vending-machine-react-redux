import React from 'react';
import './App.css';


class App extends React.Component {

  state = {
    balance: 0,

    products: [
      {name: 'Oreo',   price: '80',  desc: 'Cookie', id: '1'},
      {name: 'Milka',  price: '140', desc: 'Chocolate', id: '2'},
      {name: 'M&M',    price: '200', desc: 'Candy', id: '3'},
      {name: 'Twix',   price: '90',  desc: 'Choco bar', id: '4'},
      {name: 'Mentos', price: '50',  desc: 'Chewing pills', id: '5'},
      {name: 'Mountain dew', price: '170', desc: 'Cold drink', id: '6'},
    ]
  }

  render() {

    const handleEnterClick = (e) => {
      this.setState({
        balance: e.currentTarget.value
      })
    }

    return <div className='interface'>
      <div className='inteface__goods'>
        <ul className='product-list'>
          <li className='product-list__item'>
            <div className='product'>
              <span className='product__name'>Oreo</span>
              <span className='product__desc'>Cookie</span>
              <span className='product__prise'>80 R</span>
              <span className='product__name'>1</span>
            </div>
          </li>
          <li className='product-list__item'>
            <div className='product'>
              <span className='product__name'>Milka</span>
              <span className='product__desc'>Chocolate</span>
              <span className='product__prise'>140 R</span>
              <span className='product__name'>2</span>
            </div>
          </li>
          <li className='product-list__item'>
            <div className='product'>
              <span className='product__name'>M&M</span>
              <span className='product__desc'>Candy</span>
              <span className='product__prise'>200 R</span>
              <span className='product__name'>3</span>
            </div>
          </li>
          <li className='product-list__item'>
            <div className='product'>
              <span className='product__name'>Twix</span>
              <span className='product__desc'>Choco bar</span>
              <span className='product__prise'>90 R</span>
              <span className='product__name'>4</span>
            </div>
          </li>
          <li className='product-list__item'>
            <div className='product'>
              <span className='product__name'>Mentos</span>
              <span className='product__desc'>Chewing pills</span>
              <span className='product__prise'>50 R</span>
              <span className='product__name'>5</span>
            </div>
          </li>
          <li className='product-list__item'>
            <div className='product'>
              <span className='product__name'>Mountain dew</span>
              <span className='product__desc'>Cold drink</span>
              <span className='product__prise'>170 R</span>
              <span className='product__name'>6</span>
            </div>
          </li>
        </ul>
      </div>
      
      <div className='interface__control-panel'>
        <form className='form'>
          <div className='dialog-board'>
            <span>Insert banknotes...</span>
            <span>{this.state.balance}</span>
          </div>

          <input  onKeyPress={handleEnterClick} />

          <p className='form__desc'>Available banknotes: 50, 100,
            200, 500 or 1000 R.
            The machine gives change
            in 1, 2, 5 and 10 R coins.</p>
        </form>
        <form>
          <div className='dialog-board'>
            <span>{this.state.balance === 0 ? '>' : 'Choose product'}</span>
          </div>
          <input />
        </form>
        <div>
          <div className='dialog-board'>
            <span>Take your product and change</span>
          </div>
          <div className='conclusion'>
            <div className='product'>
              <span>10R <br/> 30 Coins</span>
            </div>
            <div className='product'>
              <span>name</span>
              <span>desc</span>
              <span>price</span>
              <span>id</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}


export default App;
