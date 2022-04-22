import styled from "styled-components";

export const ContactListBox = styled.ul`
  margin: 10px;
  padding: 10px;
  width: 320px;
  background-color: #dcdcdc;
  border: 1px solid black;
  border-radius: 5px;
`;
export const ListItem = styled.li`
  display: flex;
  list-style: none;
  margin: 10px;
  padding: 10px;
  max-width: 320px;
  background-color: white;
  border-radius: 2px;
`;
export const NumberOrder = styled.span`
  margin-right: 10px;
  padding: 0 5px;
  width: 10px;
  border-radius: 5px;
`;
export const Number = styled.span`
  margin-left: 5px;
  font-weight: 700;
`;
export const DeleteContact = styled.button`
  margin-left: auto;
  margin-right: 2px;
  padding: 5px;
  background-color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
  :hover {
    transform: scale(1.2);
  }
`;
