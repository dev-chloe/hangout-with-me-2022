
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
            메뉴
          </li>
          <li className={style.active}>
            메뉴
          </li>
          <li>
            메뉴
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;