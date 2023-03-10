import React from "react";
import "../App.css";

const Content = ({ selectedFossilRecord }) => {
  const text = selectedFossilRecord?.text;

  return (
    <div className="content">
      {selectedFossilRecord ? (
        <>
          <h1>{text?.heading}</h1>
          <img
            className="content-img"
            src={selectedFossilRecord.img}
            alt={text?.heading}
          />
          {text?.paragraphs.map((item) => (
            <p>{item}</p>
          ))}
        </>
      ) : (
        <>
          <h1>Fossil Finder!</h1>
          <p>Scarlett has to put some instructions here</p>
          <p>
            Close this drawer by clicking on the transparent grey background
            (over the map)
          </p>
          <p>
            We could also put in a litte X in the top right corner of the
            drawer, what do you think?
          </p>
        </>
      )}
    </div>
  );
};

export default Content;
