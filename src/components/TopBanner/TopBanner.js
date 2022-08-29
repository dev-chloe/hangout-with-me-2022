import topImg from "./../../img/flying.png";
import style from "./TopBanner.module.scss";

const TopBanner = () => {
  return (
    <div className={style.top_banner}>
      <div className={style.txt_wrapper}>
        <h1>Welcome To my world</h1>
      </div>
      <div className={`img_wrapper ${style.img_wrapper}`}>
        <img src={topImg} alt="flying people"/>
      </div>
    </div>
  );
};

export default TopBanner;