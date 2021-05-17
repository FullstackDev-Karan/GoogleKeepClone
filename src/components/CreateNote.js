import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [notes, setNotes] = useState({ title: "", content: "" });

  const InpVal = (e) => {
    const { name, value } = e.target;

    setNotes((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(notes);
  };

  const addEvent = () => {
    props.passNote(notes);
    setNotes({ title: "", content: "" });
  };

  return (
    <div className="main_note">
      <form>
        <input
          type="text"
          placeholder="Title"
          autoComplete="off"
          onChange={InpVal}
          name="title"
          value={notes.title}
        />
        <br></br>
        <textarea
          type="text"
          onChange={InpVal}
          cols="43"
          rows="6"
          placeholder="write note here..."
          name="content"
          value={notes.content}
        />
        <Button onClick={addEvent}>
          <AddIcon style={{ fontSize: "30px" }} className="plus_sign" />
        </Button>
      </form>
    </div>
  );
};

export default CreateNote;
