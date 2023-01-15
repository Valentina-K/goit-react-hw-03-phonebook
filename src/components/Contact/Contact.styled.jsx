import styled from 'styled-components';
export const Item = styled.li`
  align-items: baseline;
  &:not(:last-child) {
    margin-bottom: 18px;
  }
  & span {
    margin-right: 18px;
  }
`;
