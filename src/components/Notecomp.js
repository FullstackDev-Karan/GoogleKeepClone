import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Notecomp = (props) => {
  const deleteNote = () => {
    props.deleteNote(props.id);
  };
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote}>
        <DeleteForeverIcon className="deleteicon"></DeleteForeverIcon>
      </button>
    </div>
  );
};

export default Notecomp;
