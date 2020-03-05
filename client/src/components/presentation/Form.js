import React, { useState } from "react";
import { Textarea, Button } from "react-rainbow-components";

export default function Form({ updateState }) {
  const [blessing, setBlessing] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    var date = new Date();
    var newEntry = { date: date.toString().substr(0, 21), blessing };
    console.log(newEntry.date);
    var items = [];
    try {
      items = JSON.parse(localStorage.getItem("gratitude")) || [];
    } catch (e) {
      console.error(e);
    }
    items.push(newEntry);
    localStorage.setItem("gratitude", JSON.stringify(items));
    console.log(items);
    updateState(items);
    setBlessing("");
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
