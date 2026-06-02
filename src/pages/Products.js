import React from 'react';
import './Pages.css';

function Products({ lang }) {
  const menuData = {
    ru: [
      { name: 'Капучино', price: '250', note: '200 мл' },
      { name: 'Латте', price: '280', note: '250 мл' },
      { name: 'Американо', price: '150', note: '200 мл' },
      { name: 'Эспрессо', price: '120', note: '50 мл' },
      { name: 'Раф кофе', price: '320', note: '250 мл' },
      { name: 'Флэт уайт', price: '290', note: '200 мл' },
      { name: 'Глясе', price: '300', note: '250 мл' },
      { name: 'Круассан', price: '120', note: 'с начинкой' },
      { name: 'Сэндвич с курицей', price: '250', note: '' },
      { name: 'Чизкейк', price: '180', note: '' }
    ],
    en: [
      { name: 'Cappuccino', price: '250', note: '200 ml' },
      { name: 'Latte', price: '280', note: '250 ml' },
      { name: 'Americano', price: '150', note: '200 ml' },
      { name: 'Espresso', price: '120', note: '50 ml' },
      { name: 'Raf coffee', price: '320', note: '250 ml' },
      { name: 'Flat white', price: '290', note: '200 ml' },
      { name: 'Glace', price: '300', note: '250 ml' },
      { name: 'Croissant', price: '120', note: 'with filling' },
      { name: 'Chicken sandwich', price: '250', note: '' },
      { name: 'Cheesecake', price: '180', note: '' }
    ]
  };

  const currentMenu = lang === 'ru' ? menuData.ru : menuData.en;

  return (
    <div className="page">
      <h1>
        {lang === 'ru'
          ? 'Меню кофейни'
          : 'Coffee shop menu'}
      </h1>

      <table className="menu-table">
        <thead>
          <tr>
            <th>
              {lang === 'ru'
                ? 'Напиток'
                : 'Drink'}
            </th>
            <th>
              {lang === 'ru'
                ? 'Цена (руб.)'
                : 'Price (₽)'}
            </th>
            <th>
              {lang === 'ru'
                ? 'Объём / Примечание'
                : 'Volume / Note'}
            </th>
          </tr>
        </thead>

        <tbody>
          {currentMenu.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.note || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;