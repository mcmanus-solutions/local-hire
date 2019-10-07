import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import * as Ui from './Navbar.styled';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Ui.Ul>
      <Ui.Li>
        <Link to='/profiles'>Profiles</Link>
      </Ui.Li>

      <Ui.Li>
        <Link to='/dashboard'>
          <Ui.Span>Dashboard</Ui.Span>
        </Link>
      </Ui.Li>
      <Ui.Li>
        <Link to='/posts'>
          <Ui.Span>Posts</Ui.Span>
        </Link>
      </Ui.Li>
      <Ui.Li>
        <Ui.A onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' /> <Ui.Span>Logout</Ui.Span>
        </Ui.A>
      </Ui.Li>
    </Ui.Ul>
  );

  const guestLinks = (
    <Ui.Ul>
      <Ui.Li>
        <Link to='/profiles'>Developers</Link>
      </Ui.Li>
      <Ui.Li>
        <Link to='/register'>Register</Link>
      </Ui.Li>
      <Ui.Li>
        <Link to='/login'>Login</Link>
      </Ui.Li>
    </Ui.Ul>
  );

  return (
    <Ui.Navbar>
      <h1>
        <Link to='/'>
          <i className='fas fa-code' /> Local Hire
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </Ui.Navbar>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
