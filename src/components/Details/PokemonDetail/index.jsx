import { PropTypes } from 'prop-types';
import SPokemonDetail from './style';

export default function PokemonDetail({
  nameFr,
  nameEn,
  nameJp,
  evolveFrom,
  pkmnDescFr,
  pkmnDescEn,
  pkmnDescJp,
  nationalDexId,
  visual,
  visualShiny,
  officialArt,
  type1,
  type2,
  generation,
}) {
  return (
    <SPokemonDetail>
      <div className="langContainer">
        <p className="title">
          {nationalDexId} - {nameFr}
        </p>
        <div className="offArt">
          <img src={officialArt} alt={nameFr} />
        </div>
        <div className="types">
          <p className="type">{type1}</p>
          {type2 === null ? null : <p className="type">{type2}</p>}
        </div>
        <p className="evolve">{evolveFrom}</p>
        <p className="desc">{pkmnDescFr}</p>
        <p className="gen">Generation : {generation}</p>
        <div className="sprites">
          <div className="spriteCont">
            <img src={visual} alt={nameFr} />
          </div>
          <div className="spriteCont">
            <img src={visualShiny} alt={`${nameFr} chromatique`} />
          </div>
        </div>
      </div>

      <div className="langContainer">
        <p className="title">
          {nationalDexId} - {nameEn}
        </p>
        <div className="offArt">
          <img src={officialArt} alt={nameEn} />
        </div>
        <div className="types">
          <p className="type">{type1}</p>
          {type2 === null ? null : <p className="type">{type2}</p>}
        </div>
        <p className="evolve">{evolveFrom}</p>
        <p className="desc">{pkmnDescEn}</p>
        <p className="gen">Generation : {generation}</p>
        <div className="sprites">
          <div className="spriteCont">
            <img src={visual} alt={nameEn} />
          </div>
          <div className="spriteCont">
            <img src={visualShiny} alt={`${nameEn} shiny`} />
          </div>
        </div>
      </div>

      <div className="langContainer">
        <p className="title">
          {nationalDexId} - {nameJp}
        </p>
        <div className="offArt">
          <img src={officialArt} alt={nameJp} />
        </div>
        <div className="types">
          <p className="type">{type1}</p>
          {type2 === null ? null : <p className="type">{type2}</p>}
        </div>
        <p className="evolve">{evolveFrom}</p>
        <p className="desc">{pkmnDescJp}</p>
        <p className="gen">第{generation}世代</p>
        <div className="sprites">
          <div className="spriteCont">
            <img src={visual} alt={nameJp} />
          </div>
          <div className="spriteCont">
            <img src={visualShiny} alt={`${nameJp}の色違い`} />
          </div>
        </div>
      </div>
    </SPokemonDetail>
  );
}

PokemonDetail.propTypes = {
  nameFr: PropTypes.string.isRequired,
  nameEn: PropTypes.string.isRequired,
  nameJp: PropTypes.string.isRequired,
  evolveFrom: PropTypes.string.isRequired,
  pkmnDescFr: PropTypes.string.isRequired,
  pkmnDescEn: PropTypes.string.isRequired,
  pkmnDescJp: PropTypes.string.isRequired,
  nationalDexId: PropTypes.number.isRequired,
  visual: PropTypes.string.isRequired,
  visualShiny: PropTypes.string.isRequired,
  officialArt: PropTypes.string.isRequired,
  type1: PropTypes.string.isRequired,
  type2: PropTypes.string.isRequired,
  generation: PropTypes.number.isRequired,
};
