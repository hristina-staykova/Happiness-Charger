import React from "react";
import { Button } from "@material-ui/core";

function BasicButton() {
  return (
    <div>
      <Button variant="contained" color="primary" href="/">
        Button goes to "/" on click
      </Button>
    </div>
  );
}

export default BasicButton;
