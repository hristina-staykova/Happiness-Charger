import React from "react";
import TextField from "@material-ui/core/TextField";

export default function BasicTextField() {
  return (
    <form noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        multiline
        rows="6"
      />
    </form>
  );
}
