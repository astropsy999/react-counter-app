import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {
  const initialState = [
    { id: 1, value: 0, name: 'Непотрібна річ' },
    { id: 2, value: 4, name: 'Ложка' },
    { id: 3, value: 0, name: 'Виделка' },
    { id: 4, value: 0, name: 'Тарілка' },
    { id: 5, value: 0, name: 'Набір мінімаліста' },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    const selectedString = counters.findIndex((c) => c.id === id);
    const newCounters = [...counters];
    newCounters[selectedString].value++;
    setCounters(newCounters);
  };
  const handleDecrement = (id) => {
    const selectedString = counters.findIndex((c) => c.id === id);
    const newCounters = [...counters];
    newCounters[selectedString].value--;
    setCounters(newCounters);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          {...count}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Скинути
      </button>
    </>
  );
};
export default CountersList;
