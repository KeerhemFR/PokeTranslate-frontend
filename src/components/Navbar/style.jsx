import styled from 'styled-components';

const SNavbar = styled.nav`
  width: 100%;
  height: 30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background-color: var(--red);
  margin-bottom: 30px;

  a {
    color: white;
    font-size: 20px;
    text-decoration: none;
    margin: 0 20px;
  }
`;

export default SNavbar;
