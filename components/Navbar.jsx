const React = require('react');

function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" style={{ color: 'black' }}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item navbar-brand">
              <a
                className="navbar-brand nav-link active"
                aria-current="page"
                href="/"
              >
                        <img src="https://huntflow.ru/static/promo-static/landing-2021/src/images/pages/brand/logos/main.svg" style={{width:150}}></img>

              </a>
            </li>

            {user ? (
              <>
                {' '}
                <li className="nav-item navbar-brand">
                  <a
                    className="navbar-brand nav-link active"
                    href="/auth/logout"
                  >
                    Log out
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item navbar-brand">
                  <a className="navbar-brand nav-link active" href="/auth/rega">
                    Sign up
                  </a>
                </li>
                <li className="nav-item navbar-brand">
                  <a className="navbar-brand nav-link active" href="/auth/loga">
                    Log in
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
        <button id="addCan" type="submit">
          Добавить нового кандидата
        </button>
      </div>
    </nav>
  );
}

module.exports = Navbar;
