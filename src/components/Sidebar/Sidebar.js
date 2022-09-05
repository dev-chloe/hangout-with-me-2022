
import { faBars, faHome, faList, faSquareH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { navState } from "recoils";
import style from "./Sidebar.module.scss";

const Sidebar = () => {
  const [isNavShowed, setIsNavShowed] = useRecoilState(navState);
  const toggledBar = () => {
    setIsNavShowed((prev) => !prev);
  };
  return (
    <div className={`${style.sidebar} ${isNavShowed ? style.toggled : ""}`}>
      <div className={style.logo}>
        <Link to="/">
          <FontAwesomeIcon icon={faSquareH} />
          <p>
            chloe&apos;s homepage
          </p>
        </Link>
        <div className={style.close_btn} onClick={toggledBar && toggledBar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
              <p>
                Home
              </p>
            </Link>
          </li>
          <li className={style.active}>
            <Link to="/contents">
              <FontAwesomeIcon icon={faList} />
              <p>
                contents
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;