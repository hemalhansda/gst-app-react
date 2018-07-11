import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddProduct = (e) => {
    e.preventDefault();
    const name = e.target.elements.product_name.value.trim();
    const code = e.target.elements.product_code.value.trim();
    const price = e.target.elements.product_price.value.trim();
    const gst = e.target.elements.product_gst.value.trim();
    const error = this.props.handleAddProduct(name, code, price, gst);
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
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <hr />
        <center><h3 className="mywidget">Add New Product</h3></center>
        <hr />
        <form class="myform" onSubmit={this.handleAddProduct}>
          <input className="add-option__input" type="text" name="product_name" placeholder="Enter Product Name" />
          <input className="add-option__input" type="text" name="product_code" placeholder="Enter Product Code"/><br/><br/>
          <input className="add-option__input" type="text" name="product_price" placeholder="Enter Product Price"/>
          <input className="add-option__input" type="text" name="product_gst" placeholder="Enter Product GST"/><br/><br/>
          <button className="mybutton"><b>Add Product</b></button>
        </form>
      </div>
    );
  }
}
