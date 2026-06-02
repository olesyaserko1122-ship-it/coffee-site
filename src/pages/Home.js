import React from 'react';
import './Pages.css';

function Home({ lang }) {
  return (
    <div className="home">
      <h1>
        {lang === 'ru'
          ? 'Добро пожаловать в нашу кофейню'
          : 'Welcome to our coffee shop'}
      </h1>

      <p className="slogan">
        {lang === 'ru'
          ? 'Лучший кофе в городе'
          : 'The best coffee in town'}
      </p>

      <div className="photos-row">
        <div className="photo-item">
          <img
            src="/coffee-cup.jpg"
            alt={lang === 'ru' ? 'Чашка кофе' : 'Coffee cup'}
            className="photo-side"
          />
          <p className="photo-caption">
            {lang === 'ru' ? 'Ароматный кофе' : 'Aromatic coffee'}
          </p>
        </div>

        <div className="photo-item">
          <img
            src="/coffee-shop.jpg"
            alt={lang === 'ru' ? 'Интерьер кофейни' : 'Coffee shop interior'}
            className="photo-side"
          />
          <p className="photo-caption">
            {lang === 'ru' ? 'Уютный интерьер' : 'Cozy interior'}
          </p>
        </div>
      </div>

      <p className="description">
        {lang === 'ru'
          ? 'Место, где кофе объединяет людей'
          : 'A place where coffee brings people together'}
      </p>

      <p className="work-hours">
        🕒 {lang === 'ru'
          ? 'Работаем ежедневно с 8:00 до 22:00'
          : 'Open daily from 8:00 AM to 10:00 PM'}
      </p>

      <p className="motto">
        {lang === 'ru'
          ? '«Наш девиз: Кофе, который вдохновляет»'
          : '"Our motto: Coffee that inspires"'}
      </p>
    </div>
  );
}

export default Home;