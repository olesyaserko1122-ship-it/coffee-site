import React, { useState } from 'react';
import './Pages.css';

function Contact({ lang }) {
  const [showMessage, setShowMessage] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setShowMessage(true);

      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    } else {
      alert(lang === 'ru' ? 'Пожалуйста, заполните все поля' : 'Please fill in all fields');
    }
  };

  return (
    <div className="page">
      <h1>
        {lang === 'ru'
          ? 'Обратная связь'
          : 'Contact us'}
      </h1>

      <p>
        {lang === 'ru'
          ? 'Телефон: +7 908 110 52 67'
          : 'Phone: +7 908 110 52 67'}
      </p>

      <p>
        {lang === 'ru'
          ? 'WhatsApp: +7 908 110 52 67'
          : 'WhatsApp: +7 908 110 52 67'}
      </p>

      <p>
        {lang === 'ru'
          ? 'Telegram: @coffee_time'
          : 'Telegram: @coffee_time'}
      </p>

      <p>
        {lang === 'ru'
          ? 'Email: coffee-time@mail.ru'
          : 'Email: coffee-time@mail.ru'}
      </p>

      <p>
        {lang === 'ru'
          ? 'Адрес: г. Ростов-на-Дону, ул. Зорге, д. 27'
          : 'Address: Rostov-on-Don, Zorge str., 27'}
      </p>

      <h2>
        {lang === 'ru'
          ? 'Отправить вопрос'
          : 'Send a question'}
      </h2>

      {showMessage && (
        <div className="success-message">
          {lang === 'ru'
            ? '✅ Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.'
            : '✅ Your message has been sent! We will contact you soon.'}
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            {lang === 'ru' ? 'Ваше имя:' : 'Your name:'}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={lang === 'ru' ? 'Введите ваше имя' : 'Enter your name'}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            {lang === 'ru' ? 'Ваш Email:' : 'Your email:'}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={lang === 'ru' ? 'Введите ваш email' : 'Enter your email'}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">
            {lang === 'ru' ? 'Ваше сообщение:' : 'Your message:'}
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder={lang === 'ru' ? 'Введите ваш вопрос' : 'Enter your question'}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          {lang === 'ru' ? 'Отправить' : 'Send'}
        </button>
      </form>
    </div>
  );
}

export default Contact;