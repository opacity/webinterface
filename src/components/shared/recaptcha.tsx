import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Recaptcha from "react-recaptcha";

import { RECAPTCHA_SITEKEY, theme } from "../../config";

const Wrapper = styled.div``;

const Form = styled.form``;

const RecaptchaComponent = () => {
  let recaptchaInstance;
  let formInstance;

  const executeCaptcha = () => {
    recaptchaInstance.execute();
  };

  const verifyCallback = response => {
    formInstance.submit();
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Form ref={form => (formInstance = form)} action="/search" method="get">
          <input type="text" name="query" />
        </Form>
        <button onClick={executeCaptcha}>Submit</button>
        <Recaptcha
          ref={e => (recaptchaInstance = e)}
          sitekey={RECAPTCHA_SITEKEY}
          size="invisible"
          verifyCallback={verifyCallback}
        />
      </Wrapper>
    </ThemeProvider>
  );
};

export default RecaptchaComponent;
