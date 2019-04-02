import React from "react";
import { connect } from "react-redux";

import coinMarketCapActions from "../../../redux/actions/coinmarketcap-action";
import CurrencyWidgetSlide from "./currency-widget-slide";

const mapStateToProps = state => ({
  data: state.coinMarketCap.data
});
const mapDispatchToProps = dispatch => ({
  initializeDownloadFn: () =>
    dispatch(coinMarketCapActions.coinMarketCapDownload())
});

const CurrencyWidget = ({ initializeDownloadFn, data }) => (
  <CurrencyWidgetSlide download={initializeDownloadFn} data={data} />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyWidget);
