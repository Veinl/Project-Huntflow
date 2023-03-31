const React = require('react');
const Layout = require('./Layout');

function Loga({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="divForm">
        <h2>Войти</h2>
        <form action="/auth/loga" method="POST" id="formLogin" className="form">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
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
            <label htmlFor="password" className="form-label">
              Пароль
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary but">
            ВОЙТИ
          </button>
        </form>
        <h2 className="errorLogin" />
      </div>
    </Layout>
  );
}
module.exports = Loga;
