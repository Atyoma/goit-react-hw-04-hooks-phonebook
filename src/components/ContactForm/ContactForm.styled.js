import styled from 'styled-components';
import { Field } from 'formik';

export const FormBox = styled.div`
  padding: 10px;
  margin: 10px;
  width: 320px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #dcdcdc;
`;
export const InputItem = styled(Field)`
  display: flex;
  margin-bottom: 10px;
  :invalid {
    border: 1px solid #2f4f4f;
  }
`;

export const Phonebook = styled.div`
  margin: 20px auto;
  width: 364px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
`;

export const AddContact = styled.button`
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
    transform: scale(1.1)`;
