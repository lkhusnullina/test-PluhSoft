import React from 'react';
import { useTranslation } from 'react-i18next';
import Project from '../components/Project';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const goToForm = () => {
    navigate("/application-form"); 
  };
  return(
    <div className="page-content page-content--projects">
      <h1 className="page-content__title">{t('projects')}</h1>
      <Project/>
      <Project/>
      <Project/>
      <button className="page-content__application" onClick={goToForm}>{t("homeContentForm")}</button>
    </div>
  );
}

export default Projects;