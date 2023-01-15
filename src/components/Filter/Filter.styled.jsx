import styled from 'styled-components';
export const FilterBox = styled.label`
  font-size: 24px;
  & span {
    margin-right: 10px;
  }
  & input {
    width: 260px;
    font-size: 20px;
    padding: 12px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    &:focus {
      outline: none;
      border: 1px solid #109dee;
    }
  }
`;
