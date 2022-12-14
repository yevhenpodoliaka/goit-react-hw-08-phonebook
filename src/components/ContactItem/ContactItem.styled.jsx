import styled from "styled-components";

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding:4px;
  border-radius:4px;
  background-color:#f1f1f1;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    &:not(:last-child){
      margin-bottom:4px;
    }
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px;
  background-color: grey;
  color: black;
  border-radius: 4px;
  &:hover {
    background-color: blue;
    color: white;
  }
`;