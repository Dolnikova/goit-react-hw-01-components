import styled from 'styled-components';
export const TitleTransaction = styled.th`
  color: white;
  display: box;
  padding: 15px 40px;
  :not(:last-child) {
    border-right: 1px white solid;
  }
`;
export const BoxTitle = styled.thead`
  background-color: #20b2aa;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  align-items: center;
`;
export const BoxContent = styled.tbody`
  background-color: white;
  padding: 5px 15px;
  border-radius: 5px;
`;
export const Transaction = styled.td`
  padding: 5px 15px;
  :not(:last-child) {
    border-right: 1px grey solid;
  }
`;
