// SearchComponent.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { IoClose } from 'react-icons/io5';

// Define the interface for props used in styled components
interface SearchBoxProps {
  isFocused: boolean;
  hasText: boolean;
}

const SearchBox = styled.div<SearchBoxProps>`
  display: flex;
  align-items: center;
  padding: 0 10px;
  border: 1px solid ${({ isFocused }) => (isFocused ? '#5a5af2' : '#ccc')};
  border-radius: 4px;
  height: 40px;
  background-color: ${({ isFocused, hasText }) => 
    isFocused || hasText ? '#f0f0f0' : '#fff'};
  transition: border-color 0.3s, background-color 0.3s;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 0 10px;
  font-size: 16px;
`;

const IconButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SearchComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue('');
  };

  return (
    <SearchBox isFocused={isFocused} hasText={!!inputValue}>
      {/* <AiOutlineSearch /> */}
      <SearchInput
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {inputValue && (
        <IconButton onClick={clearInput}>
          {/* <IoClose /> */}
        </IconButton>
      )}
    </SearchBox>
  );
};

export default SearchComponent;
