import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
`;
const StyledLabel = styled.label`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export function FormInput({ name, type, label, value, setFormSettings }) {
  // handel form input
  const handleChange = (e) => {
    setFormSettings((prevSettings) => {
      return {
        ...prevSettings,
        [e.target.name]: handleValue(e.target)
      };
    });
  };
  // handle value
  const handleValue = (target) => {
    if (type === 'checkbox') {
      return target.checked === true;
    }
    return target.value;
  };
  return (
    <StyledLabel htmlFor={name}>
      {label}
      {type === 'checkbox' ? (
        <StyledInput
          type="checkbox"
          name={name}
          id={name}
          onChange={(e) => handleChange(e)}
          defaultChecked={value}
        />
      ) : (
        <StyledInput
          type={type ?? 'text'}
          name={name}
          id={name}
          onBlur={(e) => handleChange(e)}
          defaultValue={value}
        />
      )}
    </StyledLabel>
  );
}
