import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

import {
  isInstalled,
  approveTokens,
  swapTokens,
  getTokenBalance
} from "./swap";

import {
  HEADER_TYPES,
  DESKTOP_WIDTH,
  theme
} from "../../config";

import Header from "../shared/header";

const Container = styled.div`
  width: 100%;
`;

const SwapContainer = styled.div`
  padding: 150px;
  max-width: 600px;
  margin: auto;
  background-color: ${props => props.theme.background};
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    padding: 25px 35px;
  }
`;

const Swap = () => {
  const [balance, setBalance] = useState<string>();
  const [balanceError, setBalanceError] = useState<Error>();

  useEffect(() => {
    getTokenBalance()
      .then(b => {
        setBalance(b.toString(10));
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

        <SwapContainer>
          { !isInstalled
            ? (
              <>
                <p>Swap facere omnis ea totam sit accusamus amet vel eum. Eveniet quas est sunt sit. Inventore enim sunt ut amet.</p>
                <p>Dolores assumenda assumenda consequatur officia magnam deserunt eligendi odio. Occaecati eum rerum error eaque. Aut aperiam dolores similique mollitia molestiae. Animi doloremque et ullam sequi nam asperiores optio fugiat.</p>
                <p>Iusto itaque facilis eos est veritatis consequatur. Eaque rem in eaque. Quas in non quas ut et a. Iusto consequuntur nesciunt molestiae eveniet accusantium dolor quia velit. Ut sit magni ut rerum dolorum enim.</p>
              </>
            )
            : (
              !balance
                ? !balanceError
                  ? <div><p>Loading...</p></div>
                  : (
                    <>
                      <p>Error retrieving balance. Did you allow the site to connect with MetaMask?</p>
                      <pre>{balanceError.name}: {balanceError.message}</pre>
                    </>
                  )
                : (
                  <>
                    <div>
                      <p>You are about to swap {balance} OPQ into {balance} OPCT.</p>
                      <h2>Step 1: Approval</h2>
                      <p>
                        Approve the swap contract to have access to your tokens.
                        The tokens will remain in your account until you press the swap button.
                      </p>
                      <div>
                        <button onClick={approve} disabled={approvalPending || approved}>Approve</button>
                        {approved && <span style={{ fontSize: "1.5rem", color: "green" }}>✓</span>}
                      </div>
                      {approvalPending && <div><progress /></div>}
                      {approvalError && <pre>{approvalError.name}: {approvalError.message}</pre>}
                    </div>
                    <div>
                      <h2>Step 2: Swap</h2>
                      <p>
                        Swapping will withdraw the OPQ tokens from your account, depositing them into the contract.
                        OPCT tokens will then be deposited into your account.
                      </p>
                      <div>
                        <button onClick={swap} disabled={!approved || swapPending || swapped}>Swap</button>
                        {swapped && <span style={{ fontSize: "1.5rem", color: "green" }}>✓</span>}
                      </div>
                      {swapPending && <div><progress /></div>}
                      {swapError && <pre>{swapError.name}: {swapError.message}</pre>}
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
