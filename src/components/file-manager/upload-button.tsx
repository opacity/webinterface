import React, { Fragment, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "../../config";

const Button = styled.button`
  width: 120px;
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
  margin: 0 10px;
  border: none;
  cursor: pointer;
`;

const UploadButton = ({ onSelected }) => {
  const uploadFileInput = useRef<HTMLInputElement>(null);
  const uploadForm = useRef<HTMLFormElement>(null);

  const selectFiles = () => {
    const files = Array.from(uploadFileInput.current!.files || []);
    uploadForm.current!.reset();
    if (files.length > 0) onSelected(files);
  };

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Button onClick={() => uploadFileInput.current!.click()}>Upload</Button>
        <form ref={uploadForm} style={{ display: "none" }}>
          <input
            type="file"
            id="file"
            multiple
            ref={uploadFileInput}
            onChange={e => selectFiles()}
          />
        </form>
      </Fragment>
    </ThemeProvider>
  );
};

export default UploadButton;
