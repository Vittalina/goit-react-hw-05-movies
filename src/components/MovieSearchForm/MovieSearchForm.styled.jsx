import styled from '@emotion/styled';

export const Searchbar = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 270px;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 56px;
  height: 30px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-color: #ff9208;
  box-shadow: 0 0 10px #ff9208;
  &:hover {
    opacity: 1;
  }
`;
export const SearchFormButtonLabel = styled.span`
  font-size: 10px;
  color: black;
`;
export const SearchFormInput = styled.input`
  display: inline-block;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  margin-right: 15px;
  &:focus {
    outline: none;
    border-color: #ff9208;
    box-shadow: 0 0 10px #ff9208;
  }
  &::placeholder {
    font: inherit;
    font-size: 18px;
    color: black;
  }
`;
