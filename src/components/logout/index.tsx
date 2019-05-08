import { useEffect } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import authenticationActions from "../../redux/actions/authentication-actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authenticationActions.logout())
});

const Logout = ({ logout }) => {
  useEffect(() => {
    logout();
    push("/");
  }, []);

  return null;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
