const React = require('react');

function Navbar() {
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
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
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/auth/logout">
              ВЫЙТИ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/auth/loga">
              ЛОГА
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/auth/rega">
              РЕГА
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>;
}

module.exports = Navbar;
