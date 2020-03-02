import React, { useState } from "react";
import { Textarea, Button } from "react-rainbow-components";

export default function BasicTextField() {
  const [blessing, setBlessing] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(blessing);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Textarea
        variant="outlined"
        multiline
        rows="10"
        value={blessing}
        onChange={e => setBlessing(e.target.value)}
      />
      <br></br>
      <Button
        type="submit"
        label="Save blessings"
        variant="success"
        className="rainbow-m-around_medium"
      />
    </form>
  );
}
