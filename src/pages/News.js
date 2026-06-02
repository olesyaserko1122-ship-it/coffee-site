import React from 'react';
import './Pages.css';

function News({ lang }) {
  return (
    <div className="page">
      <h1>
        {lang === 'ru'
          ? 'Скидка 20% на латте'
          : '20% discount on latte'}
      </h1>
      <p>
        {lang === 'ru'
          ? 'Только в выходные дни'
          : 'Only on weekends'}
      </p>

      <h2>
        {lang === 'ru'
          ? 'Акция месяца'
          : 'Monthly promotion'}
      </h2>
      <p>
        {lang === 'ru'
          ? 'Второй капучино в подарок при покупке двух круассанов'
          : 'Second cappuccino free with purchase of two croissants'}
      </p>

      <h2>
        {lang === 'ru'
          ? 'Новинка! Тыквенный латте'
          : 'New! Pumpkin spice latte'}
      </h2>
      <p>
        {lang === 'ru'
          ? 'Попробуйте сезонный напиток с нотками корицы и мускатного ореха'
          : 'Try the seasonal drink with notes of cinnamon and nutmeg'}
      </p>

      <h2>
        {lang === 'ru'
          ? 'Утренний кофе'
          : 'Morning coffee'}
      </h2>
      <p>
        {lang === 'ru'
          ? 'Скидка 10% на любой кофе до 10:00'
          : '10% discount on any coffee until 10:00 AM'}
      </p>

      <h2>
        {lang === 'ru'
          ? 'Дегустация кофе'
          : 'Coffee tasting'}
      </h2>
      <p>
        {lang === 'ru'
          ? 'Каждую субботу в 15:00. Вход свободный'
          : 'Every Saturday at 3:00 PM. Free entry'}
      </p>
    </div>
  );
}

export default News;