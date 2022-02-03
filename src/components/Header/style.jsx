import styled from 'styled-components';

const SHeader = styled.header`
  width: 100vw;
  height: 150px;
  background-color: var(--red);
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 50px;
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
  }

  h2 {
    font-size: 35px;
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 400;
  }
`;

export default SHeader;
