import { PropTypes } from 'prop-types';
import SNatureDetail from './style';

export default function NatureDetail({
  nameFr,
  nameEn,
  nameJp,
  downStat,
  upStat,
  likeFlavor,
  hateFlavor,
}) {
  return (
    <SNatureDetail>
      <div className="langContainer">
        <p className="title">{nameFr}</p>
        <div className="natureInfos">
          <p>Augmente: {upStat}</p>
          <p>Goût préféré: {likeFlavor}</p>
          <p>Baisse: {downStat}</p>
          <p>Goût détesté: {hateFlavor}</p>
        </div>
      </div>

      <div className="langContainer">
        <p className="title">{nameEn}</p>
        <div className="natureInfos">
          <p>Improve: {upStat}</p>
          <p>Prefered taste: {likeFlavor}</p>
          <p>Worsen: {downStat}</p>
          <p>Hated taste: {hateFlavor}</p>
        </div>
      </div>

      <div className="langContainer">
        <p className="title">{nameJp}</p>
        <div className="natureInfos">
          <p>アップスタット: {upStat}</p>
          <p>好きな味: {likeFlavor}</p>
          <p>ダウンスタット: {downStat}</p>
          <p>嫌いな味: {hateFlavor}</p>
        </div>
      </div>
    </SNatureDetail>
  );
}

NatureDetail.propTypes = {
  nameFr: PropTypes.string.isRequired,
  nameEn: PropTypes.string.isRequired,
  nameJp: PropTypes.string.isRequired,
  downStat: PropTypes.string.isRequired,
  upStat: PropTypes.string.isRequired,
  likeFlavor: PropTypes.string.isRequired,
  hateFlavor: PropTypes.string.isRequired,
};
