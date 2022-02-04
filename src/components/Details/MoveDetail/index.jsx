import { PropTypes } from 'prop-types';
import SMoveDetail from './style';

export default function MoveDetail({
  nameFr,
  nameEn,
  nameJp,
  descFr,
  descEn,
  descJp,
  accuracy,
  power,
  pp,
  type,
  generation,
  damageClass,
}) {
  return (
    <SMoveDetail>
      <div className="langContainer">
        <p className="title">{nameFr}</p>
        <div className="moveStats">
          <p>Précision: {accuracy}</p>
          <p>Puissance: {power}</p>
          <p>PP: {pp}</p>
        </div>
        <p className="type">{type}</p>
        <p className="desc">{descFr}</p>
        <div className="miscInfo">
          <p>Génération: {generation}</p>
          <p>Type de dégâts: {damageClass}</p>
        </div>
      </div>

      <div className="langContainer">
        <p className="title">{nameEn}</p>
        <div className="moveStats">
          <p>Accuracy: {accuracy}</p>
          <p>Power: {power}</p>
          <p>PP: {pp}</p>
        </div>
        <p className="type">{type}</p>
        <p className="desc">{descEn}</p>
        <div className="miscInfo">
          <p>Generation: {generation}</p>
          <p>Damage type: {damageClass}</p>
        </div>
      </div>

      <div className="langContainer">
        <p className="title">{nameJp}</p>
        <div className="moveStats">
          <p>命中: {accuracy}</p>
          <p>力: {power}</p>
          <p>PP: {pp}</p>
        </div>
        <p className="type">{type}</p>
        <p className="desc">{descJp}</p>
        <div className="miscInfo">
          <p>世代: {generation}</p>
          <p>ダメージタイプ: {damageClass}</p>
        </div>
      </div>
    </SMoveDetail>
  );
}

MoveDetail.propTypes = {
  nameFr: PropTypes.string.isRequired,
  nameEn: PropTypes.string.isRequired,
  nameJp: PropTypes.string.isRequired,
  descFr: PropTypes.string.isRequired,
  descEn: PropTypes.string.isRequired,
  descJp: PropTypes.string.isRequired,
  accuracy: PropTypes.number.isRequired,
  power: PropTypes.number.isRequired,
  pp: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  generation: PropTypes.number.isRequired,
  damageClass: PropTypes.string.isRequired,
};
