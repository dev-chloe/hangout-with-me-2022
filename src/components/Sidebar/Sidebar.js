
import { faBars, faHome, faList, faSquareH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.scss";

const Sidebar = ({isNavShowed, toggledBar}) => {
  return (
    <div className={`${style.sidebar} ${isNavShowed ? style.toggled : ""}`}>
      <div className={style.logo}>
        <Link to="/">
          <FontAwesomeIcon icon={faSquareH} />
          <p>
            chloe's homepage
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
            <Link to="/">
              <FontAwesomeIcon icon={faList} />
              <p>
                contents
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;