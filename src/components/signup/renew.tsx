import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";


import metamaskActions from "../../redux/actions/metamask-actions";

import { MasterHandle } from "opaque";
import SendPaymentSlide from "./send-payment-slide";

const mapStateToProps = (state, props) => {
  return {
    masterHandle: state.authentication.masterHandle
  };
};

const mapDispatchToProps = dispatch => ({
  openMetamask: ({ cost, ethAddress, gasPrice }) =>
    dispatch(metamaskActions.createTransaction({ cost, ethAddress, gasPrice }))
});

const Renew = ({
	masterHandle,
	openMetamask
}: {
	masterHandle: MasterHandle,
	openMetamask
}) => {
	const [accountInfo, setAccountInfo] = useState<any>()
	const [invoice, setInvoice] = useState<any>()
	const [waitForPayment, setWaitForPayment] = useState<any>()
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState<Error>()

	useEffect(() => {
		if (masterHandle) {
			masterHandle.getAccountInfo().then((res) => setAccountInfo(res))
		}
	}, [masterHandle])

	useEffect(() => {
		if (masterHandle) {
			masterHandle.renew()
				.then(({ data: { opqInvoice: invoice }, waitForPayment }) => {
					setWaitForPayment(waitForPayment)
					setInvoice(invoice)
				})
				.catch(setError)
		}
	}, [masterHandle, accountInfo])

	useEffect(() => {
		if (waitForPayment) {
			waitForPayment
				.then(() => { setSuccess(true) })
				.catch(setError)
		}
	}, [waitForPayment])

	if (success) {
		return <Redirect to="/file-manager" />;
	}

	if (!masterHandle) {
		return <Redirect to="/login" />;
	}

	if (error) {
		return (
			<>
				<h2>Could not upgrade account</h2>
				<div>Check your internet connection, and make sure that your account is close to expiry.</div>
				<div>{error.toString()}</div>
			</>
		)
	}

	if (!invoice || !accountInfo) {
		return <div>Loading...</div>;
	}

	return (
		<SendPaymentSlide
			invoice={invoice}
			opqCost={invoice.cost}
			storageLimit={accountInfo.storageLimit}
			openMetamask={openMetamask}
		/>
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Renew);
