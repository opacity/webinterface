import React from "react";
import { connect } from "react-redux";

// import signupActions from "../../redux/actions/signup-actions";
import Main from "./main";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

const SignUp = () => <Main />;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
