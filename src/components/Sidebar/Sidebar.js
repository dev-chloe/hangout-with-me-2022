
import { faHome, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <Link to="/">
          chloe's homepage
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
              Home
            </Link>
          </li>
          <li className={style.active}>
            <Link to="/">
              <FontAwesomeIcon icon={faList} />
              contents
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;