import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';

import logo from './images/logo.png';

function App() {
  const [lang, setLang] = useState('ru');

  const text = {
    ru: {
      home: 'Главная',
      products: 'Меню',
      news: 'Новости',
      contact: 'Контакты',
      about: 'О нас',
      footer: '📞 +7 908 110 52 67 | 📍 ул. Зорге, 15, Ростов-на-Дону | © 2026 «Coffee Time»',
      bannerLeft: 'Кофе с собой —\nвсегда свежий',
      bannerRight: 'Свежая выпечка\nкаждое утро!',
      langButton: 'EN',

      tags: ['капучино', 'латте', 'эспрессо', 'раф', 'круассан', 'чизкейк', 'сэндвич', 'глясе']
    },
    en: {
      home: 'Home',
      products: 'Menu',
      news: 'News',
      contact: 'Contact',
      about: 'About us',
      footer: '📞 +7 908 110 52 67 | 📍 Zorge St., 15, Rostov-on-Don | © 2026 "Coffee Time"',
      bannerLeft: 'Coffee to go —\nalways fresh',
      bannerRight: 'Fresh pastries\nevery morning!',
      langButton: 'RU',

      tags: ['cappuccino', 'latte', 'espresso', 'raf', 'croissant', 'cheesecake', 'sandwich', 'glace']
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo-container">
          <img src={logo} alt="Логотип кофейни" className="logo" />
          <h2 className="logo-text">Coffee Time</h2>
        </div>
      </header>

      <main className="app-main">

        <aside className="app-section">

          <nav className="main-nav">
            <Link to="/">{text[lang].home}</Link>
            <Link to="/products">{text[lang].products}</Link>
            <Link to="/news">{text[lang].news}</Link>
            <Link to="/contact">{text[lang].contact}</Link>
            <Link to="/about">{text[lang].about}</Link>
          </nav>

          <div className="banner banner-left">
            <p>{text[lang].bannerLeft.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}</p>
          </div>
        </aside>

        <article className="app-article">
          <button
            className="lang-switch"
            onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
          >
            {text[lang].langButton}
          </button>

          <Routes>
            <Route path="/" element={<Home lang={lang} text={text} />} />
            <Route path="/products" element={<Products lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
            <Route path="/news" element={<News lang={lang} />} />
            <Route path="/about" element={<About lang={lang} />} />
          </Routes>
        </article>

        <aside className="app-aside">

          <div className="tags">
            {text[lang].tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>

          <div className="banner banner-right">
            <p>{text[lang].bannerRight.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}</p>
          </div>
        </aside>
      </main>

      <footer className="app-footer">
        <p>{text[lang].footer}</p>
      </footer>

      <div className="mobile-nav">
        <Link to="/">{text[lang].home}</Link>
        <Link to="/products">{text[lang].products}</Link>
        <Link to="/news">{text[lang].news}</Link>
        <Link to="/contact">{text[lang].contact}</Link>
        <Link to="/about">{text[lang].about}</Link>
      </div>
    </div>
  );
}

export default App;