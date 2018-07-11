import React from 'react';

const Lists = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. Product Name: {props.optionText}<br/>Product Code: {props.optionCode}<br/>Product Price: {props.optionPrice} /-<br/>Product GST: {props.optionGst}%
    </p>
  </div>
);

export default Lists;

//<br/>&nbsp;&nbsp;&nbsp;Id: {props.optionId}

// <b align="right">Quantity: </b>
// <input align="right" type="text" name="quantity" />
