import styled from 'styled-components';

const SNatureDetail = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  .langContainer {
    width: calc(100% / 4);
    border-bottom: 2px solid var(--red);
    border-left: 2px solid var(--red);
    border-radius: 10px;
    padding: 20px;
    box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.3),
      -3px 3px 3px rgba(255, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.5);
  }

  .title {
    font-weight: 600;
    font-size: 24px;
    width: 100%;
    text-align: center;
  }

  .natureInfos {
    width: 100%;
    margin: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  .natureInfos p {
    width: 50%;
    margin-top: 15px;
    text-align: center;
  }
`;

export default SNatureDetail;
