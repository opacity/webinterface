import React from "react";

import SignupFlow from "./signup-flow";

import { SignupPhases } from "./phases";

const CreateAccount = props => (
  <SignupFlow phases={SignupPhases} {...props} />
);

export default CreateAccount;
