import React, { useState } from "react";
import "./App.css";
import CreateNote from "./components/CreateNote";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notecomp from "./components/Notecomp";

function App() {
  const [additem, setAdditem] = useState([]);

  const addNote = (notes) => {
    // alert("its added");
    // eslint-disable-next-line react-hooks/rules-of-hooks

    setAdditem((prevData) => {
      return [...prevData, notes];
    });
    console.log(additem);
  };
  const onDelete = (id) => {
    setAdditem((dataold) => {
      return dataold.filter((currdata, indx) => {
        return indx !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="noteadded">
        {additem.map((value, index) => {
          return (
            <div>
              <Notecomp
                key={index}
                id={index}
                title={value.title}
                content={value.content}
                deleteNote={onDelete}
              />
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
