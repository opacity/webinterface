import React, { Fragment, useRef } from "react";
import { ThemeProvider } from "styled-components";

import { theme, FILE_MAX_SIZE } from "../../config";

import Button from "../shared/generic/button";

const UploadButton = ({ onSelected }) => {
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
        <Button onClick={() => uploadFileInput.current!.click()}>Upload</Button>
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

export default UploadButton;
