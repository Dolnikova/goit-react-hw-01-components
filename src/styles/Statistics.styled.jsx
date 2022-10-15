import styled from 'styled-components';
const randomBgColor = () => `#${Math.random().toString(16).slice(2, 8)}`;
export const ContainerStatistics = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0 0 6px 5px rgb(0 0 0 / 75%);
  width: 320px;
  margin: 100px auto;
  border-radius: 5px;
  background-color: #fff;
`;
export const StatList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 44px;
  padding: 10px;
  color: white;
  background-color: ${randomBgColor};
  :focus-within,
  :hover {
    background-color: black;
  }
  :first-of-type {
    border-bottom-left-radius: 5px;
  }
  :last-of-type {
    border-bottom-right-radius: 5px;
  }
`;
export const SectionTitle = styled.h2`
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 500;
`;
