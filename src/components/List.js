import React from 'react';
import Lists from './Lists';

const List = (props) => (
  <div>
      {props.lists.length === 0 && <p className="widget__message">No Items in the list yet! </p>}
      {props.lists.length !== 0 && <p className="widget__message">The Items are </p>}
      {
        props.lists.map((optioner, index) => (
          <Lists
            key={optioner}
            count={index+1}
            optionText={optioner.name}
            optionCode={optioner.code}
            optionPrice={optioner.price}
            optionGst={optioner.gst}
          />
        ))
      }
  </div>
);

export default List;

//<br/>&nbsp;&nbsp;&nbsp;Id: {props.optionId}
