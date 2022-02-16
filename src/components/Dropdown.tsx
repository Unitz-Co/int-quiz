import React from "react";
import styled from 'styled-components';
// import { IoIosArrowDown } from 'react-icons/io';

type DropdownType = {
  options: any[];
  handleFilterAdvisor: (key: string, value: string) => void;
}

const Select = styled.select`
  border-radius: 4px;
  border: 1px solid #08a1a0;
  width: 150px;
  margin: 0;
  padding: 0 15px;
  outline: 0;
  cursor: pointer;
  font-size: 16px;
  // -moz-appearance:none;
  // -webkit-appearance:none;
  // appearance:none;
`;
// TODO: handle arrow icon
  
const Dropdown = ({ options, handleFilterAdvisor }: DropdownType) => {
  return (
    <Select onChange={(e: any) => handleFilterAdvisor('status', e.target.value)}>
      {options.map((option: any) => <option key={option.value} value={option.value}>{option.title}</option>)}
    </Select>
  )
}

export default Dropdown;
