import React, { useEffect } from 'react';
import {useState} from 'react';
import styled from 'styled-components';

const CustomSelect = ({setBank}) => {
    const [currentValue, setCurrentValue] = useState("");
    const [showOptions, setShowOptions] = useState(false);

    const handleOnChangeSelectValue = (e) => {
      const { innerText } = e.target;
      setCurrentValue(innerText);
      setBank(innerText);
    };
  
    return (
      <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
        <Label>{currentValue}</Label>
        <SelectOptions show={showOptions}>
          <Option onClick={handleOnChangeSelectValue}>국민</Option>
          <Option onClick={handleOnChangeSelectValue}>하나</Option>
          <Option onClick={handleOnChangeSelectValue}>신한</Option>
        </SelectOptions>
      </SelectBox>
    )
  };

  const SelectBox = styled.div`
    position: relative;
    width: 25%;
    padding: 8px;
    margin-left: 120px;
    margin-right: 35px;
    border-radius: 12px;
    background-color: #ffffff;
    align-self: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    
    &::before {
      content: "⌵";
      position: absolute;
      top: 1px;
      right: 8px;
      color: #49c181;
      font-size: 20px;
    }
`;

const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;

const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 18px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 90px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
`;
const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;

export default CustomSelect;