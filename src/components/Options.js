import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Products List</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove all
      </button>
    </div>

    {props.products.length === 0 && <p className="widget__message">Please add a Product to get started! </p>}
    {
      props.products.map((optioner, index) => (
        <Option
          handleDeleteOption={props.handleDeleteOption}
          key={optioner}
          count={index+1}
          handleEdit={props.handleEdit}
          optionText={optioner.name}
          optionCode={optioner.code}
          optionPrice={optioner.price}
          optionGst={optioner.gst}
        />
      ))
    }
  </div>
);

export default Options;

// optionId={optioner.id}
