import React from 'react';

const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. Product Name: {props.optionText}<br/>&nbsp;&nbsp;&nbsp;&nbsp;Product Code: {props.optionCode}<br/>&nbsp;&nbsp;&nbsp;&nbsp;Product Price: {props.optionPrice} /-<br/>&nbsp;&nbsp;&nbsp;&nbsp;Product GST: {props.optionGst}%</p>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleEdit(props.optionText, props.optionCode, props.optionPrice, props.optionGst);
      }}
    >Edit</button>
  </div>
);

export default Option;

//<br/>&nbsp;&nbsp;&nbsp;Id: {props.optionId}
