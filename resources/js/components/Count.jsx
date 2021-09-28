import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

Count.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

Count.defaultProps = {
  min: 1,
};

function Count({ min, max /* , onChange */ }) {
  const [currentValue, setCurrentValue] = useState(1);
  // Node element with count input
  const countInput = useRef();
  // Helper
  const getNormalValue = (newValue) =>
    Number.isNaN(newValue) ? min : newValue;
  // Get and apply normal value
  const applyValue = (value) => {
    const newValue = Math.max(min, Math.min(value, max));
    countInput.current.value = newValue;
    setCurrentValue(getNormalValue(newValue));
  };
  // Button handlers
  const decrement = () => applyValue(currentValue - 1);
  const increment = () => applyValue(currentValue + 1);
  // Get raw value from input
  const rawValue = (e) => {
    const newValue = parseInt(e.target.value, 10);
    applyValue(getNormalValue(newValue));
  };

  return (
    <div>
      <button
        className='btn btn-danger'
        type='button'
        onClick={decrement}
        disabled={currentValue <= min}
      >
        -
      </button>
      <input
        type='text'
        className='mx-3'
        defaultValue={currentValue}
        ref={countInput}
        onBlur={rawValue}
        onKeyUp={(e) => (e.keyCode === 13 ? rawValue(e) : true)}
      />
      <button
        className='btn btn-success'
        type='button'
        onClick={increment}
        disabled={currentValue >= max}
      >
        +
      </button>
    </div>
  );
}

export default Count;
