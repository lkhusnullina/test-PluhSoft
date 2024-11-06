import { useTranslation } from "react-i18next";

function ButtonSwitch() {
    const { i18n } = useTranslation();
    const changeLanguage = (lang) => i18n.changeLanguage(lang);
    
  return (
    <>
        <button className="navbar__button" onClick={() => changeLanguage("ru")}>RU</button>
        <button className="navbar__button" onClick={() => changeLanguage("en")}>EN</button>
    </>
  );
}

export default ButtonSwitch
