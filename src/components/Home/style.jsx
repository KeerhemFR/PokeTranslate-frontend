import styled from 'styled-components';

const SHome = styled.section`
  width: 95%;
  min-height: calc(100vh - 250px);
  background-color: rgba(255, 255, 255, 0.5);
  margin: auto;
  border-radius: 15px;
  border-bottom: 2px solid var(--red);
  border-left: 2px solid var(--red);
  box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.3), -3px 3px 3px rgba(255, 0, 0, 0.2);

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 30px;
    font-weight: 500;
  }

  p {
    width: 70%;
    margin: 0 auto;
    font-size: 18px;
    display: flex;
    justify-content: center;
    font-weight: 400;
  }

  .eyeCatch {
    height: 100px;
    align-items: center;
    font-size: 30px;
    font-weight: 400;
  }
`;

export default SHome;
