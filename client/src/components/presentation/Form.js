import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function BasicTextField() {
  const [blessing, setBlessing] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit button");
    console.log(blessing);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        multiline
        rows="10"
        label="List your blessings..."
        value={blessing}
        onChange={e => setBlessing(e.target.value)}
      />
      <input variant="contained" primary={true} type="submit" value="Save" />
    </form>
  );
}
