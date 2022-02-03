import styled from 'styled-components';

const SPokemonDetail = styled.section`
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

  .offArt {
    width: 80%;
    border-radius: 10px;
    margin: auto;
  }

  .offArt img {
    width: 100%;
  }

  .desc {
    width: 100%;
    padding: 10px;
  }

  .types {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .type {
    width: 40%;
    text-align: center;
  }

  .evolve,
  .gen {
    width: 100%;
    text-align: center;
  }

  .sprites {
    width: 90%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin: auto;
  }

  .spriteCont {
    width: 40%;
  }

  .spriteCont img {
    width: 100%;
  }
`;

export default SPokemonDetail;
