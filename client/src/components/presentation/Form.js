import React from "react";
import TextField from "@material-ui/core/TextField";

export default function BasicTextField() {
  return (
    <form noValidate autoComplete="off">
      <TextField variant="outlined" multiline rows="10" />
    </form>
  );
}
