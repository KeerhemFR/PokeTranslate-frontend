import { useState } from 'react';
import SFooter from './style';

export default function Footer() {
  const [currYear] = useState(new Date().getFullYear());

  return (
    <SFooter>
      <p>
        This website was made for a school project and is unofficial.
        <br />
        Characters, ®Pokemon™ marks and trademarks are properties of ©Nintendo,
        The Pokémon Company, Game Freak, Creatures.
      </p>
      <p>KeerhemFR - Copyright © {currYear}</p>
    </SFooter>
  );
}
