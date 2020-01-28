import React from 'react'

class ChooseProductForm extends React.Component {
  render() {

    let dialogBoard 

    if (this.props.errorMessageIncorrect) {
      dialogBoard = this.props.errorMessageIncorrect
    } else if (this.props.balance === 0) {
      dialogBoard = '>'
    } else if (this.props.selectedProduct) {
      dialogBoard = 'Success'
    } else {
      dialogBoard = 'Choose product'
    }

    return (
      <form onSubmit={this.props.handleProductEnterClick}>
        <div className="dialog-board">
          <span>
            {dialogBoard}
          </span>
        </div>
        <input
          onInput={this.props.productInputValue}
          ref={this.props.productInputValueRef}
          disabled={this.props.selectedProduct || this.props.balance === 0}
        />
      </form>
    )
  }
}
export default ChooseProductForm
