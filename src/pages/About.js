import React from 'react';
import './Pages.css';

function About({ lang }) {
  return (
    <div className="page">
      <h1>
        {lang === 'ru'
          ? 'Coffee Time'
          : 'Coffee Time'}
      </h1>

      <div className="founder-photo">
        <img
          src="/coffee-heart.png"
          alt={lang === 'ru' ? 'Кофе с сердечком' : 'Coffee with heart'}
          className="founder-image"
        />
      </div>

      <p>
        {lang === 'ru'
          ? 'Мы открылись в 2010 году и с тех пор радуем гостей лучшим кофе в городе'
          : 'We opened in 2010 and have been delighting guests with the best coffee in town ever since'}
      </p>

      <p>
        {lang === 'ru'
          ? 'Мы используем только свежемолотый кофе высшего качества'
          : 'We use only freshly ground coffee of the highest quality'}
      </p>

      <p>
        {lang === 'ru'
          ? 'Никаких заменителей – только натуральные ингредиенты'
          : 'No substitutes – only natural ingredients'}
      </p>

      <p>
        {lang === 'ru'
          ? 'Мы закупаем зёрна напрямую с плантаций Бразилии, Колумбии и Эфиопии'
          : 'We buy beans directly from plantations in Brazil, Colombia and Ethiopia'}
      </p>

      <p>
        {lang === 'ru'
          ? 'Наша миссия – дарить людям радость и энергию с каждой чашкой кофе'
          : 'Our mission is to bring joy and energy to people with every cup of coffee'}
      </p>

      <p>
        {lang === 'ru'
          ? 'Победители городского конкурса «Лучший кофе 2025»'
          : 'Winners of the city competition "Best Coffee 2025"'}
      </p>
    </div>
  );
}

export default About;