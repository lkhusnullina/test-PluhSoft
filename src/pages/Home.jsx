import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <div className="page-content page-content--home">
      <h1 className="page-content__title">{t('home')}</h1>
      <p className="page-content__text">{t('homeContent')}</p>
    </div>
  );
}

export default Home;