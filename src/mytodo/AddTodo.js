import React, { useState } from "react";

const AddTodo = ({ onCreate }) => {
  const [value, setValue] = useState("");
  const submitForm = () => {
    onCreate(value);
    setValue("");
  };

  return (
    <form style={{ marginBottom: "10 px" }} onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Search text"
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button type="button" onClick={submitForm}>
        {" "}
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
