import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";

import metamaskActions from "../../redux/actions/metamask-actions";

import { MasterHandle } from "opaque";
import SendPaymentSlide from "./send-payment-slide";

import { formatGbs } from "../../helpers";

const mapStateToProps = (state, props) => {
  return {
    masterHandle: state.authentication.masterHandle
  };
};

const mapDispatchToProps = dispatch => ({
  openMetamask: ({ cost, ethAddress, gasPrice }) =>
    dispatch(metamaskActions.createTransaction({ cost, ethAddress, gasPrice }))
});

const BackButton = styled(Link)`
  min-width: 120px;
  height: 40px;
  display: inline-flex;
	align-items: center;
	justify-content: center;
  background-color: ${props => props.theme.button.background};
  font-size: 16px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.button.color};
  text-align: center;
  text-decoration: none;
	padding: 0 10px;
	margin: 40px 0;
  border: none;
  cursor: pointer;
`;

const RenewComponent = ({
  masterHandle,
  openMetamask
}: {
  masterHandle: MasterHandle,
  openMetamask
}) => {
  const [accountInfo, setAccountInfo] = useState<any>();
  const [invoice, setInvoice] = useState<any>();
  const [waitForPayment, setWaitForPayment] = useState<any>();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (masterHandle) {
      masterHandle.getAccountInfo().then(res => setAccountInfo(res))
        .catch(setError);
    }
  }, [masterHandle]);

  useEffect(() => {
    if (masterHandle) {
      masterHandle.renew()
        .then(({ data: { opctInvoice: invoice }, waitForPayment }) => {
          setWaitForPayment(waitForPayment);
          setInvoice(invoice);
        })
        .catch(setError);
    }
  }, [masterHandle, accountInfo]);

  useEffect(() => {
    if (waitForPayment) {
      waitForPayment
        .then(() => { setSuccess(true); })
        .catch(setError);
    }
  }, [waitForPayment]);

  if (success) {
    return <Redirect to="/file-manager" />;
  }

  if (!masterHandle) {
    return <Redirect to="/login" />;
  }

  if (error) {
    return (
      <div>
        <h4>Could not upgrade account</h4>
        <div>Check your internet connection, and make sure that your account is close to expiry.</div>
        <div>{error.toString()}</div>
        <div>
          <BackButton to="/file-manager">Go Back</BackButton>
        </div>
      </div>
    );
  }

  if (!invoice || !accountInfo) {
    return <div>Loading...</div>;
  }

  return (
    <SendPaymentSlide
      invoice={invoice}
      opctCost={invoice.cost}
      storageLimit={formatGbs(accountInfo.storageLimit)}
      openMetamask={openMetamask}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenewComponent);
