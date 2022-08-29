import { useNavigate } from "react-router-dom";
import style from "./ContentDetail.module.scss";

const ContentDetail = () => {
  let navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className={style.contents_detail}>
        <div className={style.contents_detail_top_section}>
          <h2>제목</h2>
          <p className={style.date}>2022.8.28</p>
        </div>
        <div className={style.contents_detail_main_section}>
          <p>내용</p>
        </div>
        <div className={style.contents_detail_bottom_section}>
          <button className={`main_btn ${style.btn}`} onClick={() => navigate(-1)}><span data-text="목록"></span></button>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;