import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const wordCount = question.trim().split(/\s+/).length;

    if (wordCount > 200) {
      setError("Вопрос не может содержать более 200 слов.");
    } else {
      setError("");
      setName("");
      setQuestion("");
      alert("Заявка отправлена");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__field">
        <label htmlFor="name" className="form__label">
            {t("formName")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form__input"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="form__field">
        <label htmlFor="question" className="form__label">
            {t("formQuestion")}
        </label>
        <textarea
          id="question"
          name="question"
          className="form__textarea"
          value={question}
          onChange={handleQuestionChange}
          required
        ></textarea>
        {error && <p className="form__error-message">{error}</p>}
      </div>
      <button type="submit" className="form__submit">
        {t("formButton")}
      </button>
    </form>
  );
};

export default Form;
