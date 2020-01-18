import React from 'react';
import './App.css';


class App extends React.Component {

  state = {
    balance: 0,
    inputValue: 0,
    legalPayload: [50, 100, 200, 500, 1000],
    errorMessage: '',
    isError: false,
    products: [
      { name: 'Oreo', price: 80, desc: 'Cookie', id: '1' },
      { name: 'Milka', price: 140, desc: 'Chocolate', id: '2' },
      { name: 'M&M', price: 200, desc: 'Candy', id: '3' },
      { name: 'Twix', price: 90, desc: 'Choco bar', id: '4' },
      { name: 'Mentos', price: 50, desc: 'Chewing pills', id: '5' },
      { name: 'Mountain dew', price: 170, desc: 'Cold drink', id: '6' },
    ]
  }

  render() {
    const handleEnterClick = (e) => {
      e.preventDefault();
      if (this.state.legalPayload.includes(parseInt(this.state.inputValue))) {
        this.setState({
          balance: this.state.inputValue
        })
      } else {
        this.setState({
          isError: true,
          errorMessage: 'Unknow bancnote'
        })
      }
    }
    const inputValue = (e) => {
      this.setState({
        inputValue: e.currentTarget.value
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
        <form onSubmit={handleEnterClick} className='form'>
          <div className='dialog-board'>
            <span>Insert banknotes...</span>
            <span>{this.state.balance}</span>
          </div>

          <input onInput={inputValue} />

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
              <span>10R <br /> 30 Coins</span>
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
