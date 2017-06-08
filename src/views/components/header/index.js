import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = ({authenticated, signOut}) => {
  return (
    <header className="header">
      <div className="g-row">
        <div className="g-col">
          <Link to="/">
            <h1 className="header__title"> NP Saving </h1>
          </Link>
          <Link to="/summary">
            <h1 className="header__title"> Summary </h1>
          </Link>
          <ul className="header__actions">
            {authenticated ? <li><button className="btn" onClick={signOut}>Sign out</button></li> : null}
            <li><a className="link link--github" href="https://github.com/Lucyjung"></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};

export default Header;
