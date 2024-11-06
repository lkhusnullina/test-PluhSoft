import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <div className="page-content page-content--about">
      <h1 className="page-content__title">{t('about')}</h1>
      <p className="page-content__text">{t('aboutContent')}</p>
    </div>
  );
}

export default About;