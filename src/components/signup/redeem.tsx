import React, { useState } from "react";
import styled from "styled-components";

const RedeemWrapper = styled.div`
	display: flex;
  flex-direction: column;
  max-width: 250px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
	margin-bottom: 10px;
  color: black;

  span {
    margin-right: .5ch;
  }

  input {
    flex-grow: 1;
  }
`;

type StatusType = "error" | null;

interface InputProps {
  statusType?: StatusType;
}

const Input = styled.input<InputProps>`
  color: black;
  height: 40px;
  text-transform: uppercase;
	border: 0.5px solid ${ props =>
    props.statusType === "error"
      ? props.theme.error.color
      : "black"
  };
`;

interface StatusMessageProps {
  statusType?: StatusType;
}

const StatusMessage = styled.p<StatusMessageProps>`
  display: inline-block;
  width: 100%;
	color: ${ props =>
    props.statusType === "error"
      ? props.theme.error.color
      : "black"
  };
  font-size: 14px;
  margin-top: 0px;
  text-align: left;
  word-break: break-all;
  overflow-wrap: anywhere;
`;

const RedeemButton = styled.button`
  margin: 0 0 10px 0;
  display: block;
  width: 100%;
  height: 40px;
  background-color: ${props => props.theme.button.background};
  font-size: 16px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.button.color};
  text-align: center;
  border: 1px solid ${props => props.theme.button.background};
  cursor: pointer;
  text-transform: uppercase;
`;

interface RedeemProps {
  ethAddress: string;
  storageLimit: string;
}

const storageLimitToCodeName = ({ storageLimit }: { storageLimit: string }) => {
  switch (storageLimit) {
    case "128 GB":
      return "BOT";
    case "1 TB":
      return "1TB";
    default:
      return storageLimit.replace(/\s+/g, "");
  }
};

const Redeem = ({ ethAddress, storageLimit }: RedeemProps) => {
  const [status, setStatus] = useState<string>();
  const [statusType, setStatusType] = useState<StatusType>();
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Redeem");

  const [code, setCode] = useState("");

  const redeemCode = async ({ code, storageLimit, ethAddress }: {
    code: string,
    ethAddress: string,
    storageLimit: string
  }) => {
    setDisabled(true);
    setStatusType(null);
    setStatus("");
    setButtonText("Checking...");

    const res = await (await fetch(`https://redeem.opacity.io/api?code=OPQ${storageLimitToCodeName({ storageLimit })}-${code.toUpperCase()}&ethaddress=${ethAddress}`)).json();

    console.log(res);

    if ([401, 402, 501, 502, 601, 602].includes(res.code)) {
      setStatusType("error");
      setStatus(res.msg);
      setDisabled(false);
      setButtonText("Redeem");
    } else {
      setStatus(`Tx: ${res.data.txhash}`);
      setButtonText("Sending Payment...");
    }

    return res;
  };

  return (
    <RedeemWrapper>
      <InputWrapper>
        <span>OPQ{storageLimitToCodeName({ storageLimit })}-</span>
        <Input
          statusType={statusType}
          onChange={e => setCode(e.target.value)}
        />
      </InputWrapper>
      { status &&
        <StatusMessage statusType={statusType}>
          {status}
        </StatusMessage>
      }
      <RedeemButton
        disabled={disabled}
        onClick={() => redeemCode({ code, ethAddress, storageLimit })}
      >
        {buttonText}
      </RedeemButton>
    </RedeemWrapper>
  );
};

export default Redeem;
