import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import authenticationActions from "../../redux/actions/authentication-actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authenticationActions.logout())
});

const Logout = ({ history, logout }) => {
  useEffect(() => {
    logout();
    history.push("/login");
  }, []);

  return null;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Logout));
