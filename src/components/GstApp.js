import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
import EditModal from './EditModal';
let uni;

class GstApp extends React.Component {
  state = {
    products: [],
    selectedOption: undefined,
    selectedOp: undefined
  };
  handleClearSelectedOption = () => {
    this.setState(() => {
      return {
        selectedOption: undefined
      };
    });
  }

  handleClearSelectedOp = () => {
    this.setState(() => {
      return {
        selectedOp: undefined
      };
    });
  }

  handleDeleteOptions = () => {
    this.setState(() => ({products:[]}));
  }


  handleEdit = (name, code, price, gst) => {
    uni = name;

    this.setState(() => {
      return {
        selectedOption: 'asdsad'
      };
    });
  };

  handleDeleteOption = (name, code, price, gst) => {
    var i;
    this.setState((prevState) => {
      for(i=0;i<prevState.products.length;i++){
        if(uni === prevState.products[i].name){
          prevState.products[i].name = name;
          prevState.products[i].code = code;
          prevState.products[i].price = price;
          prevState.products[i].gst = gst;
        }
      }
    });

    this.setState(() => {
      return {
        selectedOption: undefined
      };
    });
  }

  handleAddOption = (option) => {
    if(!option) {
      return 'Enter Valid Value to add item';
    } else if (this.state.products.indexOf(option) > -1) {
      return 'This option already exist';
    }

    this.setState((prevState) => {
      return {
        products: prevState.products.concat([{name: option}])
      };
    });
  };

  handleSearch = (option) => {
    var i;
    //console.log(this.state.products);
    for(i=0;i<this.state.products.length;i++){
      if(option === this.state.products[i].name || option === this.state.products[i].code){
        return option;
      }
    }
    return undefined;
  };

  handleList = (option) => {
    const list = this.state.products.filter((options) => options.name === option || options.code === option );
    //console.log(list);
    return list;
  }

  handleAddProduct = (name, code, price, gst) => {
    if(!name) {
      return 'Enter Valid Value to add product';
    } else if (this.state.products.indexOf(name) > -1) {
      return 'This Product already exist';
    }

    this.setState((prevState) => {
      return {
        products: prevState.products.concat([{
          name: name,
          code: code,
          price: price,
          gst: gst
        }])
      };
    });
  }

  handlePick = () => {
    this.setState(() => {
      return {
        selectedOp: 'option'
      };
    });
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('products');
      const products = JSON.parse(json);

      if (products) {
        this.setState(() => {
          return {
            products: products
          };
        });
      }
      //console.log('componentDidMount!');
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.products.length !== this.state.products.length){
      const json = JSON.stringify(this.state.products);
      localStorage.setItem('products', json);
      //console.log('saving data!');
    }
  }

  componentWillUnmount(){
    console.log('componentWillUnmount!');
  }

  render(){
    const title = 'GST App';
    const subtitle = 'Generate your products final MRP from here';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.products.length > 0}
            />
          <div className="widget">
            <Options
              handleEdit={this.handleEdit}
              products={this.state.products}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddProduct={this.handleAddProduct}
              selectedOption={this.state.selectedOption}
              handleClearSelectedOption={this.handleClearSelectedOption}
            />
            <OptionModal
              handleList={this.handleList}
              handleSearch={this.handleSearch}
              selectedOp={this.state.selectedOp}
              handleClearSelectedOp={this.handleClearSelectedOp}
            />
            <EditModal
              handleDeleteOption={this.handleDeleteOption}
              selectedOption={this.state.selectedOption}
              handleClearSelectedOption={this.handleClearSelectedOption}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GstApp;
