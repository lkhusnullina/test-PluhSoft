import { useTranslation } from "react-i18next";

function ButtonSwitch() {
    const { i18n } = useTranslation();
    const changeLanguage = (lang) => i18n.changeLanguage(lang);
    
  return (
    <div className="navbar__buttons">
        <button className={`navbar__button ${i18n.language === "ru" ? "navbar__button--active" : ""}`}
        onClick={() => changeLanguage("ru")}>RU</button>
        <button className={`navbar__button ${i18n.language === "en" ? "navbar__button--active" : ""}`}
        onClick={() => changeLanguage("en")}>EN</button>
    </div>
  );
}

export default ButtonSwitch
