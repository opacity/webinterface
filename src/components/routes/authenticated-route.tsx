import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

import { AUTHENTICATION_STATUSES } from "../../config";

const mapStateToProps = (state, props) => ({
  authenticationStatus: state.authentication.status
});

const mapDispatchToProps = dispatch => ({});

const AuthenticatedRoute = ({
  path,
  component: ProtectedComponent,
  authenticationStatus
}) => {
  const isLoggedIn = authenticationStatus === AUTHENTICATION_STATUSES.LOGGED_IN;

  return (
    <Route
      path={path}
      render={props =>
        isLoggedIn ? (
          <ProtectedComponent {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticatedRoute);
