import React from "react";
import styled, { ThemeProvider } from "styled-components";

import {
  HEADER_TYPES,
  theme
} from "../../config";

import Header from "../shared/header";
import ScreenContainer from "../shared/screen-container";

import OPQTokenABI from "./contracts/OPQToken.abi.json";
import OPCTSwapABI from "./contracts/OPCTSwap.abi.json";

import { OPQ_TOKEN_CONTRACT_ADDRESS, OPCT_SWAP_CONTRACT_ADDRESS } from "./swap";

const Container = styled.div`
  width: 100%;
`;

const SwapContainer = styled(ScreenContainer)``;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.5em;
`;

const StyledDetails = styled.details`
	border: 1px solid gray;
	padding: 8px;
	margin-bottom: 8px;

	&[open] {
		padding-bottom: 0;
	}

	& summary {
		padding: 4px 8px 0 8px;
	}

	&[open] summary {
		border-bottom: 1px solid gray;
		padding: 4px 16px 8px 16px;
		margin: 0 -8px;
	}
`;

const ReadonlyPreCode = ({ children, ...props }) => {
  return (
    <pre style={{ whiteSpace: "pre-wrap", overflow: "auto" }} {...props}>
      <code>
        <div
          contentEditable={true}
          onCut={e => e.preventDefault()}
          onPaste={e => e.preventDefault()}
          onBeforeInput={e => e.preventDefault()}
          onKeyDown={e => ["Backspace", "Delete"].includes(e.key) && e.preventDefault()}
          {...{ "autocomplete": "off", "autocorrect": "off", "autocapitalize": "off", "spellcheck": "false" }}
        >
          {children}
        </div>
      </code>
    </pre>
  );
};

const StyledReadonlyPreCode = styled(ReadonlyPreCode)`
	padding: 8px;
	border: 1px solid gray;
`;

const SwapManualInformation = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header type={HEADER_TYPES.EMPTY} />

        <SwapContainer title="OPQ to OPCT Manual Swap Information">
          <div>
            <Subtitle>OPCT Swap Official End Date: January 1, 2021.</Subtitle>
            <h4>Introduction</h4>
            <p>This guide assumes that you are confident in making transactions on a smart contract. If you are not comfortable with this it is recommended that you use the automated web3 solution. All arguments must be ABI encoded before making the transactions. Some software may do this automatically, but others don't.</p>

            <h4>Contract Information</h4>

            <h5>OPQ</h5>
            <StyledDetails open={true}>
              <summary>OPQ Address:</summary>
              <ReadonlyPreCode>{OPQ_TOKEN_CONTRACT_ADDRESS}</ReadonlyPreCode>
            </StyledDetails>
            <StyledDetails>
              <summary>OPQ ABI</summary>
              <ReadonlyPreCode>{JSON.stringify(OPQTokenABI, null, "\t")}</ReadonlyPreCode>
            </StyledDetails>

            <h5>OPCTSwap</h5>
            <StyledDetails open={true}>
              <summary>OPCTSwap Address:</summary>
              <ReadonlyPreCode>{OPCT_SWAP_CONTRACT_ADDRESS}</ReadonlyPreCode>
            </StyledDetails>
            <StyledDetails>
              <summary>OPCTSwap ABI</summary>
              <pre>
                <code>
                  <div
                    contentEditable={true}
                    onCut={e => e.preventDefault()}
                    onPaste={e => e.preventDefault()}
                    onBeforeInput={e => e.preventDefault()}
                    onKeyDown={e => ["Backspace", "Delete"].includes(e.key) && e.preventDefault()}
                  >
                    {JSON.stringify(OPCTSwapABI, null, "\t")}
                  </div>
                </code>
              </pre>
            </StyledDetails>

            <h4>Approving Token Transfer</h4>
            <p>To allow the swap contract to take tokens out of your account you must send an approval transaction to the <strong>OPQ contract</strong>. The relevant part of the ABI is:</p>
            <StyledReadonlyPreCode>{`...
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x095ea7b3"
	},
...`}</StyledReadonlyPreCode>
            <p>Call the approve function with arguments:</p>
            <StyledReadonlyPreCode>{OPCT_SWAP_CONTRACT_ADDRESS}, 130000000000000000000000000</StyledReadonlyPreCode>

            <h4>Swapping Tokens</h4>
            <p>Now you must call a function on the <strong>OPCT swap contract</strong> to move OPQ out of your account, and OPCT into your account. The relevant part of the ABI is:</p>
            <StyledReadonlyPreCode>{`...
	{
		"inputs": [],
		"name": "swap",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
...`}</StyledReadonlyPreCode>
            <p>Call the swap function with no arguments.</p>

            <h4>Conclusion</h4>
            <p>You should now verify that your tokens have been swapped. It may take a minute for token trackers to update so it is best to check from within wallet software.</p>
          </div>
        </SwapContainer>
      </Container>
    </ThemeProvider>
  );
};

export default SwapManualInformation;
