import styled from 'styled-components';

const SSearchPage = styled.div`
  width: 100%;
  min-height: calc(100vh - 250px);

  a {
    text-decoration: none;
    color: inherit;
  }

  .searchTools {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 400px;
    margin: 0 auto;
    position: relative;
  }

  .searchTools input {
    width: 100%;
    height: 40px;
    margin: 30px 0;
    border: 2px solid var(--red);
    border-radius: 100px;
    padding: 0 20px;
    box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.3),
      -3px 3px 3px rgba(255, 0, 0, 0.2);
  }

  .searchTools select {
    position: absolute;
    right: 0;
    width: 100px;
    height: 44px;
    margin: 30px 0;
    border: 2px solid var(--red);
    border-radius: 100px 100px 100px 100px;
    background-color: var(--red);
    color: white;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
  }

  .searchTools input:focus {
    outline: none;
  }

  .listContainer {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
  }

  .listContainer ul {
    width: calc(100% / 4);
    border-bottom: 2px solid var(--red);
    border-left: 2px solid var(--red);
    border-radius: 10px;
    padding: 20px;
    box-shadow: -3px 3px 3px rgba(0, 0, 0, 0.3),
      -3px 3px 3px rgba(255, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export default SSearchPage;
