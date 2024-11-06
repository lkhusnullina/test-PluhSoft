import React from 'react';
import { useTranslation } from 'react-i18next';
import Form from '../components/Form';

function ApplicationForm() {
  const { t } = useTranslation();
  return (
    <div className="page-content page-content--application-form">
      <h1 className="page-content__title">{t('applicationForm')}</h1>
      <p className="page-content__text">{t('applicationFormContent')}</p>
      <Form/>
    </div>
  );
}

export default ApplicationForm;