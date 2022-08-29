import { faFaceGrinBeam, faRightFromBracket, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";

const Header = ({isLogined}) => {
  return (
    <header className={style.header}>
      <ul>
        {isLogined ?
          <>
            <li>
              <Link to="/">
                <div className="user_icon">
                  <FontAwesomeIcon icon={faFaceGrinBeam} />
                </div>
                chloe
              </Link>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faRightFromBracket} />
                로그아웃
              </button>
            </li>
          </>
          :
          <>
            <li>
              <Link to="/login">
                <FontAwesomeIcon icon={faRightToBracket} />
                로그인
              </Link>
            </li>
            <li>
              <Link to="/join">
                <FontAwesomeIcon icon={faUser} />
                회원가입
              </Link>
            </li>
          </>
        }
      </ul>
    </header>
  );
};

export default Header;