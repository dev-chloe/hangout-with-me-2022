import { faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faRightToBracket} />
            로그인
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faUser} />
            회원가입
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;