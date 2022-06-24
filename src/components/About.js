//Imoort react from react module.
import React from "react";
//Export the about component as default.
export default function About(props) {
  return (
    //returning the about component.
    <div
      className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
    >
      <h1>{props.heading}</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={{border:"2px solid white"}}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "dark" ? "#343a40" : "white",
                color: props.mode === "dark" ? "white" : "#343a40",
              }}
            >
              <h3>Analyse your Text</h3>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#343a40" : "white",
                color: props.mode === "dark" ? "white" : "#343a40",
              }}
            >
              <strong>Text Utiliz+</strong> allows you to use text quickly and
              efficiently. You can use it to convert text from UpperCase to
              LowerCase, to clear the text, copy it to the clipboard, capitalize
              each word, extract only text, extract only numbers, eliminate
              extra spaces, decode Base64, convert Base64 to text, reverse the
              text, and many more.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{border:"2px solid white"}}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "dark" ? "#343a40" : "white",
                color: props.mode === "dark" ? "white" : "#343a40",
              }}
            >
              <h3>Free to use</h3>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#343a40" : "white",
                color: props.mode === "dark" ? "white" : "#343a40",
              }}
            >
              <strong>Text Utiliz+</strong> is a free online text formatter
              tool. Using Text Utiliz+, you can learn how many words,
              characters, and how long it takes to read the text. Thus Text
              Utiliz+ is suitable for writing text with a word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{border:"2px solid white"}}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "dark" ? "#343a40" : "white",
                color: props.mode === "dark" ? "white" : "#343a40",
              }}
            >
            <h3>Browser Compatible</h3>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#343a40" : "white",
                color: props.mode === "dark" ? "white" : "#343a40",
              }}
            >
              Using this software, you can analyze text in Web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, and Opera. It can be
              used to count characters in Facebook, blogs, books, excel
              documents, pdf documents, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
