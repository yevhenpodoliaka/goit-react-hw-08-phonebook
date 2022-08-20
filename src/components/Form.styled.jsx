import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  padding: 8px;
  gap: 8px;
  border-radius: 4px;
  margin-bottom:4px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;

`

export const Input = styled.input`
  border: none;
  border-bottom:1px solid black;
  outline: none;
  background-color:transparent;
`;
export const Btn = styled.button`
text-transform:uppercase;
  display: block;
  margin: 0 auto;
  padding: 8px;
  background-color: blue;
  color: white;
  border-radius: 4px;
  &:hover {
    background-color: aqua;
    color: blue;
  }
`

export const FilterWrap = styled.div`
padding:12px;
  background-color: #f3f3f3;
  border-radius: 4px;
  margin-bottom:4px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;