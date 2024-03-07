import styled from 'styled-components';
import { LabeledInput } from '../../../shared/UI-components/LabeledInput';
import { useState } from 'react';

const SearchWrapper = styled.div`
  display: flex;
  ${window.innerWidth<=600 ?'flex-direction:column':'flex-direction:row'}
  justify-content: space-around;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  
`;
const SearchFiltersTitle = styled.div`

  width: 100%;
  box-sizing: border-box;
`;

interface queryParameterType {
  name: boolean;
  lastName: boolean;
  phoneNumber: boolean;
}
interface SearchBarType {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  queryParameter: queryParameterType;
  setQueryParameter: (value: queryParameterType) => void;
}
export const SearchBar: React.FC<SearchBarType> = ({
  searchQuery,
  setSearchQuery,
  queryParameter,
  setQueryParameter,
}) => {
  const queryParameterChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQueryParameter({
      ...queryParameter,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <SearchFiltersTitle>Search by:</SearchFiltersTitle>
      <SearchWrapper>
        <LabeledInput
          label='First Name'
          type='checkbox'
          name='name'
          checked={queryParameter.name}
          onChange={(event) =>
            queryParameterChangeHandler(
              event as React.ChangeEvent<HTMLInputElement>
            )
          }
        />
        <LabeledInput
          label='Last Name'
          type='checkbox'
          name='lastName'
          checked={queryParameter.lastName}
          onChange={(event) =>
            queryParameterChangeHandler(
              event as React.ChangeEvent<HTMLInputElement>
            )
          }
        />
        <LabeledInput
          label='Phone number'
          type='checkbox'
          name='phoneNumber'
          checked={queryParameter.phoneNumber}
          onChange={(event) =>
            queryParameterChangeHandler(
              event as React.ChangeEvent<HTMLInputElement>
            )
          }
        />
      </SearchWrapper>
      <SearchInput
        placeholder='Search...'
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </>
  );
};
