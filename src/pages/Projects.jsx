import React from 'react';
import { useTranslation } from 'react-i18next';
import Project from '../components/Project';

function Projects() {
  const { t } = useTranslation();
  return(
    <div className="page-content page-content--projects">
      <h1 className="page-content__title">{t('projects')}</h1>
      <Project/>
      <Project/>
      <Project/>
    </div>
  );
}

export default Projects;