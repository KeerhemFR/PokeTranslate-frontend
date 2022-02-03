import styled from 'styled-components';

const SFooter = styled.footer`
  width: 100%;
  height: 80px;
  background-color: var(--red);
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;

  p {
    font-size: 14px;
    color: white;
    font-weight: 500;
    text-align: center;
  }
`;

export default SFooter;
