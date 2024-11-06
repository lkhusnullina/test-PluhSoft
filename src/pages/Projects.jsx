import React from 'react';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();
  return(
    <div className="page-content page-content--projects">
      <h1 className="page-content__title">{t('projects')}</h1>
      <p className="page-content__text">{t('projectsContent')}</p>
    </div>
  );
}

export default Projects;