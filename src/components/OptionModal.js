import React from 'react';
import Modal from 'react-modal';
import List from './List';

let option;
let total = 0;
export default class OptionModal extends React.Component {
  state = {
    error: undefined,
    lists: [],
    lt: undefined,
    totalp: undefined
  };
  // const proList = {
  //   list: []
  // };
  handleSearchProduct = (e) => {
    e.preventDefault();
    option = e.target.elements.option.value.trim();
    const error = this.props.handleSearch(option);
    this.state.lt = undefined;
    //console.log(error);
    this.setState(() => {
      return {error};
    });

    if(!error) {
      e.target.elements.option.value = '';
      this.state.lt = 'asdsadsad';
    }
  }

  addToList = (e) => {
    e.preventDefault();
    //const option = e.target.elements.option.value.trim();
    const list = this.props.handleList(option);

    this.setState((prevState) => {
      return {
        lists: prevState.lists.concat(list)
      };
    });

    //console.log(this.state.lists);
  }

  addTotal = (e) => {
    e.preventDefault();
    //console.log(this.state.lists);
    var i;
    for(i=0;i<this.state.lists.length;i++){
      var price = parseInt(this.state.lists[i].price, 10);
      var gst = parseInt(this.state.lists[i].gst, 10);
      var finalGst = (price * gst) / 100;
      var finalPrice = finalGst + price;
      total = total + finalPrice;
    }
    //console.log(total);
    this.setState((prevState) => {
      //console.log(prevState);
      return {
        totalp: total
      }
    });
    this.state.totalp = total;
    //console.log('This is totalp: ',this.state.totalp);
    //total = 0;
  }
  modExit = (e) => {
    e.preventDefault();
    this.props.handleClearSelectedOp();
  }

  render() {
    return (
      <Modal
        isOpen={!!this.props.selectedOp}
        onRequestClose={this.props.handleClearSelectedOp}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="mymodal"
      >
        <div className="mydiv">
          <form className="add-option" onSubmit={this.handleSearchProduct}>
            <input className="add-option__input" type="text" name="option" />
            <button className="button">Search</button> &nbsp; &nbsp;
            <button onClick={this.modExit} className="button">Exit</button>
          </form>
          {this.state.error && <p>Product {this.state.error} is found!</p>}
          {this.state.lt && <p>Product not found!</p>}
          {this.state.error && <button onClick={this.addToList} className="mybutton">Add {this.state.error} to list</button>}
          <List
            lists={this.state.lists}
          />
          <br />
          {this.state.lists.length !== 0 &&
            <form className="add-option" onSubmit={this.addTotal}>
              <button className="button">Calculate Total</button> &nbsp; &nbsp;
              <div className="add-option__input">
                <p> TOTAL VALUE </p>
                {this.state.totalp !== undefined && <p><b> Rs. {this.state.totalp}{total = 0}</b></p>}
              </div>
            </form>
          }
        </div>
      </Modal>
    );
  }
}

// {
//   this.state.list.map((optioner, index) => (
//     <List
//       key={optioner}
//       handleEdit={props.handleEdit}
//       optionText={optioner.name}
//       optionCode={optioner.code}
//       optionPrice={optioner.price}
//       optionGst={optioner.gst}
//     />
//   ))
// }

// {this.state.totalp !== undefined && <p>Total Value is Rs. {this.state.totalp}{total = 0}</p>}
// {this.state.lists.length !== 0 && <button onClick={this.addTotal} className="mybutton">Calculate Total</button>}
