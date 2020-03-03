import React, { useState } from "react";
import { Textarea, Button } from "react-rainbow-components";

export default function Form() {
  const [blessing, setBlessing] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    var date = new Date();
    var newEntry = { date, blessing };

    if (localStorage.getItem("gratitude") === null) {
      var items = [];
      items.push(newEntry);
      localStorage.setItem("gratitude", JSON.stringify(items));
    } else {
      var items = JSON.parse(localStorage.getItem("gratitude"));
      items.push(newEntry);
      localStorage.setItem("gratitude", JSON.stringify(items));
    }
  };

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      id="gratitudeForm"
    >
      <Textarea
        variant="outlined"
        multiline
        rows={10}
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
