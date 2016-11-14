import React from 'react';
import {render} from 'react-dom';
import {ReCAPTCHA} from ("react-google-recaptcha");

function onChange(value) {
  console.log("Captcha value:", value);
}

render(
    <ReCAPTCHA
      ref="recaptcha"
      sitekey="6Lf-5AsUAAAAAD-dyYK0kTzhoGjMV2bgikYSE8zv"
      onChange={onChange}
    />,
    document.body
);
