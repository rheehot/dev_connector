import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Landing = props => {
  return (
    <section class="landing">
      <div class="dark-overlay">
        <div class="landing-inner">
          <h1 class="x-large">Developer Connector</h1>
          <p class="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div class="buttons">
            <Link to="/register" class="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" class="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {};

export default Landing;
