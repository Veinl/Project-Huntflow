const React = require('react');
const Layout = require('./Layout');

const Rega = ({ title }) => (
  <Layout title={title}>
    <div>
      <form action="/auth/rega" method="POST" id="formReg">
        <div className="mb-3">
          <label for="name" className="form-label">
            Имя
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Почта
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <div className="mb-3">
          <label for="password2" className="form-label">
            Повтори пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="password2"
            name="password2"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          СОХРАНИ
        </button>
      </form>
      <h2 className="errorReg"></h2>
    </div>
  </Layout>
);
module.exports = Rega;
