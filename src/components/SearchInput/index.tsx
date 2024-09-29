// SearchComponent.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { IoClose } from 'react-icons/io5';

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  border: 1px solid transparent;
  border-radius: 4px;
  height: 40px;
   background-color:${props => props.theme.grey100};
  margin-top:8px;
  transition: border-color 0.3s, background-color 0.3s;
  &:focus-within {
    border:1px solid ${props => props.theme.primary};
i
  }

  input:not(:placeholder-shown) {
    background-color:${props => props.theme.grey100};
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
 color:${props => props.theme.grey500}
 `

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 0 10px;
  font-size: 16px;
  font-weight:${props => props.theme.fontWeights.semiBold};
  letter-spacing:0.5px;
`;

const IconButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color:${props => props.theme.grey500}
`;

const SearchComponent: React.FC = () => {
  const [searchParam,setSearchParam] = useSearchParams();
  const [inputValue, setInputValue] = useState<string>(searchParam.get('search') || '');


  const pushToParams = useCallback(debounce((value: string) => {
    setSearchParam({search:(value)})
  }, 200),[]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value); 
    pushToParams(value);
  };

  const clearInput = () => {
    setInputValue('');
    pushToParams.cancel();
    setSearchParam()
  };


  return (
    <SearchBox>
      <SearchIcon />
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
          <IoClose />
        </IconButton>
      )}
    </SearchBox>
  );
};

export default SearchComponent;
