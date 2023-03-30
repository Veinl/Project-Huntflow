const React = require('react');

function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" style={{ color: 'black' }}>
        <a className="navbar-brand" href="#">
          HuntFlow
        </a>
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
                href="#"
              >
                Home
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
      </div>
    </nav>
  );
}

module.exports = Navbar;
