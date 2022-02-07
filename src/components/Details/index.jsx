import axios from 'axios';
import { useEffect, useState } from 'react';
import PokemonDetail from './PokemonDetail';
import MoveDetail from './MoveDetail';
import NatureDetail from './NatureDetail';
import SDetails from './style';

export default function Details() {
  const [url] = useState(window.location.href);
  const [splitUrl] = useState(url.split('?'));
  const [urlQuery] = useState(splitUrl[1].split('&'));
  const [urlCat] = useState(urlQuery[0].split('='));
  const [urlName] = useState(urlQuery[1].split('='));
  const [answer, setAnswer] = useState({});
  const [comp, setComp] = useState();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/${urlCat[1]}/details/${urlName[1]}`
      )
      .then(({ data }) => {
        return setAnswer(data[0]);
      });
  }, []);

  useEffect(() => {
    switch (urlCat[1]) {
      case 'pokemons':
        setComp(<PokemonDetail {...answer} />);
        break;
      case 'moves':
        setComp(<MoveDetail {...answer} />);
        break;
      case 'natures':
        setComp(<NatureDetail {...answer} />);
        break;
      default:
        setComp(<h3>Sorry, we don&apos;t have what you are searching for</h3>);
        break;
    }
  }, []);

  return <SDetails>{comp}</SDetails>;
}
