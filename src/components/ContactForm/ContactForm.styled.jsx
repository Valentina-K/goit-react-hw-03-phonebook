import styled from 'styled-components';
const Form = styled.form`
  border: 1px solid #109dee;
  padding: 18px;
  border-radius: 4px;
  font-size: 24px;
  width: 500px;
  & div {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
  & label {
    margin-right: 8px;
    font-weight: 500;
  }
  & input {
    width: 60%;
    font-size: 20px;
    padding: 12px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    &:focus {
      outline: none;
      border: 1px solid #109dee;
    }
  }
  & button {
    display: block;
    border: none;
    padding: 10px;
    border-radius: 8px;
    margin: 0 auto;
    cursor: pointer;
    background-color: #0d76bd;
    color: #fff;
    box-shadow: 4px 4px 4px -3px rgba(0, 0, 0, 0.66);
    font-size: 20px;
  }
`;
export default Form;
