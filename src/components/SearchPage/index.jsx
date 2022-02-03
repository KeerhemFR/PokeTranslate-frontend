import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SSearchPage from './style';

export default function SearchPage() {
  const [research, setResearch] = useState('');
  const [filter, setFilter] = useState('pokemons');
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    if (research !== '') {
      axios
        .get(`${process.env.REACT_APP_API_URL}/${filter}/${research}`)
        .then(({ data }) => {
          return data.length
            ? setAnswer(data)
            : setAnswer([
                {
                  nameFr: 'Pas de données valide trouvée',
                  nameEn: 'Not available data found',
                  nameJp: '正しいデータを見つかりませんでした',
                },
              ]);
        });
    }
  }, [research, filter]);

  function handleAnswer(e) {
    setResearch(e.target.value);
  }

  function handleFilter(e) {
    setFilter(e.target.value);
  }

  return (
    <SSearchPage>
      <section className="searchTools">
        <input type="text" value={research} onChange={handleAnswer} />
        <select onChange={handleFilter}>
          <option value="pokemons">Pokémon</option>
          <option value="items">Items</option>
          <option value="moves">Moves</option>
          <option value="abilities">Abilities</option>
          <option value="types">Types</option>
          <option value="natures">Natures</option>
        </select>
      </section>
      <section className="listContainer">
        <ul>
          {answer.map((data) => (
            <li>
              <Link to={`/details/?cat=${filter}&name=${data.nameEn}`}>
                {data.nameFr}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {answer.map((data) => (
            <li>
              <Link to={`/details/?cat=${filter}&name=${data.nameEn}`}>
                {data.nameEn}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {answer.map((data) => (
            <li>
              <Link to={`/details/?cat=${filter}&name=${data.nameEn}`}>
                {data.nameJp}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SSearchPage>
  );
}
