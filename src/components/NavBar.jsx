import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function NavBar() {
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__link" to="/">
            {t("home")}
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/projects">
            {t("projects")}
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/application-form">
            {t("applicationForm")}
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/about">
            {t("about")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
