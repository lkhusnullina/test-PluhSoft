import { useTranslation } from "react-i18next";

function Project() {
  const { t } = useTranslation();
  return (
    <div className="project__card">
        <img src="./images/illustration.jpg" alt='project' className="project__image" />
        <span className="project__text">{t("projectsContentCard")}</span>
    </div>
  );
}

export default Project;
