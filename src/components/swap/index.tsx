import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

import BN from "bn.js";

import {
  isInstalled,
  approveTokens,
  swapTokens,
  getTokenBalance
} from "./swap";

import {
  HEADER_TYPES,
  // DESKTOP_WIDTH,
  theme
} from "../../config";

import Header from "../shared/header";
import ScreenContainer from "../shared/screen-container";

const Container = styled.div`
  width: 100%;
`;

const SwapContainer = styled(ScreenContainer)``;

const Button = styled.button`
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
  border: none;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
    opacity: .5;
  }
`;

const Swap = () => {
  const [balance, setBalance] = useState<string>();
  const [balanceError, setBalanceError] = useState<Error>();

  useEffect(() => {
    getTokenBalance()
      .then(b => {
        if (b.eq(new BN(0))) {
          setBalanceError(new Error("No OPQ balance found, are you sure you selected the right account?"));
        } else {
          setBalance(b.toString(10));
        }
      })
      .catch(err => {
        setBalanceError(err);
      });
  }, []);

  const [approved, setApproved] = useState(false);
  const [approvalPending, setApprovalPending] = useState(false);
  const [approvalError, setApprovalError] = useState<Error>();

  const approve = () => {
    setApprovalPending(true);

    approveTokens()
      .then(() => {
        setApproved(true);
        setApprovalError(undefined);
        setApprovalPending(false);
      })
      .catch(err => {
        setApprovalError(err);
        setApprovalPending(false);
      });
  };

  const [swapped, setSwapped] = useState(false);
  const [swapPending, setSwapPending] = useState(false);
  const [swapError, setSwapError] = useState<Error>();

  const swap = () => {
    setSwapPending(true);

    swapTokens()
      .then(() => {
        setSwapped(true);
        setSwapError(undefined);
        setSwapPending(false);
      })
      .catch(err => {
        setSwapError(err);
        setSwapPending(false);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header type={HEADER_TYPES.EMPTY} />

        <SwapContainer title="Swap OPQ to OPCT">
          { !isInstalled
            ? (
              <>
                <p>MetaMask (or another web3 provider) is not installed.</p>
                <p>Please install to continue.</p>
              </>
            )
            : (
              !balance
                ? !balanceError
                  ? <div><p>Loading...</p></div>
                  : (
                    <>
                      <p>Error retrieving balance. Did you allow the site to connect with MetaMask?</p>
                      <pre>{balanceError.message}</pre>
                    </>
                  )
                : (
                  <>
                    <div>
                      <p>You are about to swap {balance} OPQ into {balance} OPCT.</p>
                      <h4>Step 1: Approval</h4>
                      <p>
                        Approve the swap contract to have access to your tokens.
                        The tokens will remain in your account until you press the swap button.
                      </p>
                      <div>
                        <Button onClick={approve} disabled={approvalPending || approved}>Approve</Button>
                        {approved && <span style={{ fontSize: "2rem", color: "green", verticalAlign: "middle", marginLeft: "10px" }}>✓</span>}
                      </div>
                      {approvalPending && <div><progress /></div>}
                      {approvalError && <pre>{approvalError.message}</pre>}
                    </div>
                    <div>
                      <h4>Step 2: Swap</h4>
                      <p>
                        Swapping will withdraw the OPQ tokens from your account, depositing them into the contract.
                        OPCT tokens will then be deposited into your account.
                      </p>
                      <div>
                        <Button onClick={swap} disabled={!approved || swapPending || swapped}>Swap</Button>
                        {swapped && <span style={{ fontSize: "2rem", color: "green", verticalAlign: "middle", marginLeft: "10px" }}>✓</span>}
                      </div>
                      {swapPending && <div><progress /></div>}
                      {swapError && <pre>{swapError.message}</pre>}
                    </div>
                  </>
                )
            )
          }
        </SwapContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Swap;
