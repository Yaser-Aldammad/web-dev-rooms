import React, { useState, useRef } from 'react';
import Input from './Input';
import { text, withKnobs } from '@storybook/addon-knobs';

export default { title: 'Components | Input', decorators: [withKnobs] };

export const Inputfield = () => {
  const inputRef = useRef('');
  const [name, setName] = useState('anil');
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  return (
    <Input
      type="text"
      placeholder={text('placeholder', 'Fullname')}
      onChange={handleInputChange}
      ref={inputRef}
      value={name}
    />
  );
};
