import React, { useState } from 'react';

const Counter = (props) => {
  const { value } = props;

  const formatValue = () => {
    return value === 0 ? 'пусте' : value;
  };
  const getBaseClasses = () => {
    let dynClasses = 'badge p-3 m-2 ';
    dynClasses += value === 0 ? 'bg-warning' : 'bg-primary';
    return dynClasses;
  };

  const handleIncrement = () => {
    props.onIncrement(props.id);
  };
  const handleDecrement = () => {
    props.onDecrement(props.id);
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBaseClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Видалити
      </button>
    </div>
  );
};
export default Counter;
