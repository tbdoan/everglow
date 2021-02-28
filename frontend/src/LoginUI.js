import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";

const LoginUI = () => {
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="email-input">Email address</InputLabel>
        <Input id="email-input" />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="pass-input">Password</InputLabel>
        <Input id="pass-input" />
      </FormControl>
    </div>
  );
};

export default LoginUI;
