import styled from 'styled-components';

const SearchWrapper = styled.div`
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchInput placeholder='Search...' />
    </SearchWrapper>
  );
};
