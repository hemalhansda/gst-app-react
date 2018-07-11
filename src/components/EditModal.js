import React from 'react';
import Modal from 'react-modal';

export default class EditModal extends React.Component {
  state = {
    error: undefined
  };
  handleAddProduct = (e) => {
    e.preventDefault();
    const name = e.target.elements.product_name.value.trim();
    const code = e.target.elements.product_code.value.trim();
    const price = e.target.elements.product_price.value.trim();
    const gst = e.target.elements.product_gst.value.trim();
    const error = this.props.handleDeleteOption(name, code, price, gst);
    this.setState(() => {
      return {error};
    });

    if(!error) {
      e.target.elements.product_name.value = '';
      e.target.elements.product_code.value = '';
      e.target.elements.product_price.value = '';
      e.target.elements.product_gst.value = '';
    }
  }
  render() {
    return (
      <Modal
        isOpen={!!this.props.selectedOption}
        onRequestClose={this.props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
      >
        <h3 className="modal__title">Edit Product</h3>
        <form class="myform" onSubmit={this.handleAddProduct}>
          <input className="add-option__input" type="text" name="product_name" placeholder="Enter the Product Name"/>
          <input className="add-option__input" type="text" name="product_code" placeholder="Enter the Product Code"/><br/><br/>
          <input className="add-option__input" type="text" name="product_price" placeholder="Enter the Product Price"/>
          <input className="add-option__input" type="text" name="product_gst" placeholder="Enter the Product GST"/>
          <br/><br/>
          <button className="mybutton">Edit</button>
        </form>
      </Modal>
    );
  }
}
