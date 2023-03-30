const React = require('react');
const Layout = require('./Layout');

function Categories({}) {
  return (
    // <Layout title={title} user={user}>
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Новые кандидаты
        <span className="badge bg-primary rounded-pill">14</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Приглашенные кандидаты
        <span className="badge bg-primary rounded-pill">2</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Кандидаты на звонок-скрининг
        <span className="badge bg-primary rounded-pill">1</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Кандидаты на видео-интервью
        <span className="badge bg-primary rounded-pill">1</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Резюме передано заказчику
        <span className="badge bg-primary rounded-pill">1</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
       Назначено интервью с заказчиком
        <span className="badge bg-primary rounded-pill">1</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
       Выдан оффер
        <span className="badge bg-primary rounded-pill">1</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
       Кандидаты, которые приняли оффер и вышли на работу
        <span className="badge bg-primary rounded-pill">1</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
       Отказы
        <span className="badge bg-primary rounded-pill">1</span>
      </li>
    </ul>
    // </Layout>
  );
}

module.exports = Categories;
