import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  padding-top: 80px;
`;

const Widget = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
`;

class CurrencyWidget extends Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://files.coinmarketcap.com/static/widget/currency.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }

  render () {
    return (
      <Container>
        <Widget
          className="coinmarketcap-currency-widget"
          data-currencyid="3632"
          data-base="USD"
          data-secondary="BTC"
          data-ticker="true"
          data-rank="true"
          data-marketcap="true"
          data-volume="true"
          data-stats="USD"
          data-statsticker="false"
        />
      </Container>
    );
  }
}

export default CurrencyWidget;
