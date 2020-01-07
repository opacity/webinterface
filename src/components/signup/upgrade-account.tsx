import React from "react";

import SignupFlow from "./signup-flow";

import { UpgradePhases } from "./phases";

const UpgradeAccount = (props) => (
  <SignupFlow phases={UpgradePhases} {...props} />
)

export default UpgradeAccount;
