import React, { useState } from 'react';
import './custom-input.style.scss';

function CustomInput({ type, label, name, size }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className='input-container'>
      <input
        type={type}
        value={value}
        style={{ width: size }}
        onChange={handleChange}
      />
      <label className={value && 'filled'} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default CustomInput;
