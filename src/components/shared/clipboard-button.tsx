import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "./button";

const POPUP_TIME = 300;

const ClipboardBtn = ({ text, children }) => {
  const [popTimeout, setPopTimeout] = useState<any>(undefined);
  return (
    <CopyToClipboard
      text={text}
      onCopy={() => {
        window.clearTimeout(popTimeout);
        setPopTimeout(
          window.setTimeout(() => setPopTimeout(undefined), POPUP_TIME)
        );
      }}
    >
      <Button className="clipboard-button">
        {popTimeout ? "Copied!" : children}
      </Button>
    </CopyToClipboard>
  );
};

export default ClipboardBtn;
