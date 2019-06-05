import React, { Fragment, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";

import { MOBILE_WIDTH, FILE_MAX_SIZE, theme } from "../../config";

const Button = styled.div`
    display: none;
    position: fixed;
    bottom: 0;
    right 0;
    margin-bottom: 15px;
    margin-right: 10px;
    background-color: ${props => props.theme.button.background};
    width: 40px;
    height: 40px;
    border-radius: 100px;
    box-shadow: 0 0.5px 4px 0 rgba(0, 0, 0, 0.2), 0 1.5px 2px 0 rgba(0, 0, 0, 0.12), 0 1.5px 1.5px 0 rgba(0, 0, 0, 0.14);
    cursor: pointer;
    @media (max-width: ${MOBILE_WIDTH}px) {
    display: block;
    }
`;

const PlusIcon = styled.div`
  width: 30px;
  height: 30px;

  &:before {
    content: "";
    width: 25px;
    height: 3px;
    border-top: 3px solid white;
    display: block;
    position: absolute;
    margin-top: 18px;
    margin-left: 7px;
  }
  &:after {
    content: "";
    width: 3px;
    height: 25px;
    border-right: 3px solid white;
    display: block;
    position: absolute;
    margin-top: 7px;
    margin-left: 15px;
  }
`;

const UploadMobileButton = ({ onSelected }) => {
  const uploadFileInput = useRef<HTMLInputElement>(null);
  const uploadForm = useRef<HTMLFormElement>(null);

  const selectFiles = () => {
    let files = Array.from(uploadFileInput.current!.files || []);
    const filesLength = files.length;
    uploadForm.current!.reset();
    if (files.length > 0) {
      files = files.filter(file => file.size <= FILE_MAX_SIZE);
      files.length !== filesLength && alert("Some files are greater then 2GB.");
      onSelected(files);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Button onClick={() => uploadFileInput.current!.click()}>
          <PlusIcon />
        </Button>
        <form ref={uploadForm} style={{ display: "none" }}>
          <input
            type="file"
            id="file"
            multiple={true}
            ref={uploadFileInput}
            onChange={e => selectFiles()}
          />
        </form>
      </Fragment>
    </ThemeProvider>
  );
};

export default UploadMobileButton;
