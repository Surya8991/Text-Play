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
              Bio
            </button>
          </h2>
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
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
