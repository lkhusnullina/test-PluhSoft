import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToForm = () => {
    navigate("/application-form"); 
  };

  return (
    <div className="page-content page-content--home">
      <div className="page-content__info">
        <h1 className="page-content__title">{t("home")}</h1>
        <p className="page-content__text">{t("homeContent")}</p>
        <button className="page-content__application" onClick={goToForm}>{t("homeContentForm")}</button>
      </div>
      <img src="./images/illustration.jpg" alt="banner" />
    </div>
  );
}

export default Home;
