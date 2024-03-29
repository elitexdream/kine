import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../layout';

/**
 * @description creates a private route to any route you want the user to be logged in.
 */
const PrivateRoute = ({ user, children, path, component, ...rest }) => {
  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <Layout>
      <Route exact path={path} render={component ? component : () => children} />
    </Layout>
  );
};

const mapStateToProps = ({ AuthReducer }) => ({
  user: AuthReducer.user,
});
export default connect(mapStateToProps)(PrivateRoute);
