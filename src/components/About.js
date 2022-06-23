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
        <div className="accordion-item">
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor: props.mode === "dark" ? "#343a40" : "white",
              color: props.mode === "dark" ? "white" : "#343a40",
            }}
          >
            <div className="accordion-body">
              <h4><strong>Text Utiliz+</strong> is a free online text formatter,which performs operations such as </h4>
              <h6>
              <ol>
              <li>Text to UpperCase</li>
              <li>Text to LowerCase</li>
              <li>Clears the text</li><li>copies it to the clipboard</li><li>Capitalizes each word</li><li>extracts only text</li><li>extracts only numbers</li><li>eliminates extra spaces</li><li>decodes Base64</li><li>converts Base64 to text</li><li> reverses the text</li><li>and much more.<strong> Enjoy all for free!</strong></li></ol></h6>
              {/* <h5>A free online text formatter, Text Utiliz+ helps you format text online. It performs operations such as text to UpperCase, text to LowerCase, clears the text, copies it to the clipboard, capitalizes each word, extracts only text, extracts only numbers, eliminates extra spaces, decodes Base64, converts Base64 to text, reverses the text and many other operations.<strong> Enjoy all for free!</strong></h5> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
