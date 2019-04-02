import React from "react";
import styled from "styled-components";
import numeral from "numeral";

const ICON_LOGO = require("../../../assets/images/logo-login.svg");

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  padding-top: 80px;
`;

const Widget = styled.div`
  border: 2px solid #e1e5ea;
  border-radius: 10px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  min-width: 285px;
`;

const Header = styled.div``;

const Logo = styled.img`
  width: 64px;
  height: 64px;
`;

const HeaderData = styled.div`
  float: right;
  width: 67%;
  border: none;
  text-align: left;
  padding: 5px 0px;
  line-height: 25px;
`;

const HeaderLogo = styled.div`
  text-align: center;
  padding: 5px 0px;
  width: 33%;
`;

const HeaderTitle = styled.div`
  text-decoration: none;
`;

const HeaderPrice = styled.div`
  font-size: 16px;
`;

const HeaderPercentPositive = styled.span`
  font-size: 16px;
  color: #009e73;
`;

const HeaderPercentNegative = styled.span`
  font-size: 16px;
  color: #d94040;
`;

const HeaderBTC = styled.div`
  font-size: 12px;
  color: rgba(39, 52, 64, 0.5);
`;

const HeaderLink = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: rgb(16, 112, 224);
`;

const Content = styled.div`
  border-top: 1px solid #e1e5ea;
  clear: both;
`;

const ContentRank = styled.div`
  text-align: center;
  float: left;
  width: 33%;
  font-size: 12px;
  padding: 12px 0;
  border-right: 1px solid #e1e5ea;
`;

const ContentVolume = styled.div`
  text-align: center;
  float: left;
  width: 33%;
  font-size: 12px;
  padding: 12px 0 16px 0;
  line-height: 1.25em;
`;

const ContentMarketCap = styled.div`
  text-align: center;
  float: left;
  width: 33%;
  font-size: 12px;
  padding: 12px 0 16px 0;
  border-right: 1px solid #e1e5ea;
  line-height: 1.25em;
`;

const ContentData = styled.div`
  font-size: 14px;
  margin-top: 18px;
  text-transform: uppercase;
`;

const ContentRankData = styled.div`
  font-size: 17px;
  margin-top: 18px;
  text-transform: uppercase;
`;

const Footer = styled.div`
  border-top: 1px solid #e1e5ea;
  text-align: center;
  clear: both;
  font-size: 10px;
  font-style: italic;
  padding: 5px 0;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: rgb(16, 112, 224);
`;

interface CurrencyWidgetSlideProps {
  download;
  data;
}

class CurrencyWidgetSlide extends React.Component<CurrencyWidgetSlideProps> {
  componentDidMount () {
    const { download } = this.props;
    download();
  }

  render () {
    const { data } = this.props;
    if (data) {
      return (
        <Container>
          <Widget>
            <Header>
              <HeaderData>
                <HeaderTitle>
                  <HeaderLink
                    target="_blank"
                    href="https://coinmarketcap.com/currencies/opacity/?utm_medium=widget&utm_campaign=cmcwidget&utm_source=localhost&utm_content=opacity"
                  >
                    {data.name}&nbsp;({data.symbol})
                  </HeaderLink>
                  <HeaderPrice>
                    {numeral(data.quotes.USD.price).format("(0.00 USD)")}
                    &nbsp;USD&nbsp;
                    {data.quotes.USD.percent_change_24h >= 0 && (
                      <HeaderPercentPositive>
                        (
                        {numeral(data.quotes.USD.percent_change_24h).format(
                          "0.00"
                        )}
                        %)
                      </HeaderPercentPositive>
                    )}
                    {data.quotes.USD.percent_change_24h < 0 && (
                      <HeaderPercentNegative>
                        (
                        {numeral(data.quotes.USD.percent_change_24h).format(
                          "0.00"
                        )}
                        %)
                      </HeaderPercentNegative>
                    )}
                  </HeaderPrice>
                  <HeaderBTC>
                    {numeral(data.quotes.BTC.price).format("($0.00000000)")} BTC
                  </HeaderBTC>
                </HeaderTitle>
              </HeaderData>
              <HeaderLogo>
                <Logo src={ICON_LOGO} />
              </HeaderLogo>
            </Header>
            <Content>
              <ContentRank>
                RANK
                <ContentRankData>{data.rank}</ContentRankData>
              </ContentRank>
              <ContentMarketCap>
                MARKET CAP
                <ContentData>
                  {numeral(data.quotes.USD.market_cap).format("($0.00 a)")}
                </ContentData>
              </ContentMarketCap>
              <ContentVolume>
                VOLUME
                <ContentData>
                  {numeral(data.quotes.USD.volume_24h).format("($0.00 a)")}
                </ContentData>
              </ContentVolume>
            </Content>
            <Footer>
              <FooterLink target="_blank" href="https://opacity.io">
                Powered by Opacity
              </FooterLink>
            </Footer>
          </Widget>
        </Container>
      );
    }
    return null;
  }
}

export default CurrencyWidgetSlide;
