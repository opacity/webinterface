import React, { Component } from "react";

import ScreenContainer from "../shared/screen-container";

const ICON_SPINNER = require("../../assets/images/icon_spinner.png");

class RetrievingInvoiceSlide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScreenContainer title="Retrieving Invoice...">
        <p>We are retrieving your invoice...</p>
        <img
          src={ICON_SPINNER}
          className="retrieving-invoice-spinner spin-2s"
        />
      </ScreenContainer>
    );
  }
}

export default RetrievingInvoiceSlide;
