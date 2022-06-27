import React, { useState } from "react";
export default function TextForm(props) {
  //To convert the text to uppercase.
  const handleUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase","sucess");
  };
  //To convert the text to lowercase.
  const handleLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase","sucess");
  };
  //To clear the text.
  const handleclearText = () => {
    setText("");
    props.showAlert("Cleared Text","sucess");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  //To extract the words from the text.
  const handletextExtract = () => {
    const regex = /[0-9/A-Z/a-z/ /]/g;
    const letters = text.match(regex);
    const res1 = letters.join("");
    setText(res1);
    props.showAlert("Extracted the words from the text","sucess");
  };
  //To extract the number from the text.
  const handleNumExtract = () => {
    const regex = /[0-9]/g;
    const digits = text.match(regex);
    const res = digits.join(" ");
    setText(res);
    props.showAlert("Extracted the Numbers from the text","sucess");
  };
  //To capitalize the first letter of each word.
  const capitalization = () => {
    let updatedText = "";
    let words = text.split(" ");
    words.forEach((word) => {
      let firstChar = word.charAt(0).toUpperCase();
      updatedText = updatedText + (firstChar + word.slice(1)) + " ";
    });
    setText(updatedText);
    props.showAlert("Capitalized the first letter of each word","sucess");
  };
  //To convert the text to Base64.
  function base64Encode() {
    setText(btoa(text));
    props.showAlert("converted the text to Base64","sucess");
  }

  // to decode base64 to text

  function base64Decode() {
    setText(atob(text));
    props.showAlert("converted the Base64 to Text","sucess");
  }
  //To reverse the text.
  function handleRevClick() {
    setText(text.split(" ").reverse().join(" "));
    props.showAlert("Reversed Text","sucess");
  }
  //To remove extra spaces from the text.
  const handleExtraSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
    props.showAlert("Removed Extra Spaces","sucess");
  };
  //To copy to clipboard.
  const handleCopy = () => {
    var text = document.getElementById("myForm");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","sucess");
  };
  //To cut the text for Twitter.
  const handleCut = () => {
    var text = document.getElementById("myForm");
    setText(text.value.slice(0,180));
    props.showAlert("Cut the text for Twitter","sucess");
  }

  //To add speak function to the text.
  // const speak = () => {
  //   let msg = new SpeechSynthesisUtterance();
  //   msg.text = text;
  //   window.speechSynthesis.speak(msg);
  // }
  const [text, setText] = useState("");
  return (
    <>
      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <h2 className="mb-4">{props.heading}</h2>
        <h5 className="mb-4">{props.des}</h5>
        <div className="mb-3">
          {/* Text area where you enter the text */}
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#343a40" : "white",
              color: props.mode === "dark" ? "white" : "#343a40",
            }}
            value={text}
            onChange={handleChange}
            id="myForm"
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-dark mx-2 my-2" onClick={handleUpperCase} disabled={text.length===0} >
          Converting to Upper Case
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleLowerCase} disabled={text.length===0}>
          Converting to Lower Case
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleclearText} disabled={text.length===0}>
          Clear Text
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleCopy} disabled={text.length===0}>
          Copy Text
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleCut} disabled={text.length===0}>
         Text For twitter
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={capitalization} disabled={text.length===0}>
          Capitalize each word
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={handletextExtract} disabled={text.length===0}>
          Extract Text
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleNumExtract} disabled={text.length===0}>
          Extract Numbers
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleExtraSpaces} disabled={text.length===0}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={base64Encode} disabled={text.length===0}>
          Text to Base64
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={base64Decode} disabled={text.length===0}>
          Base64 to Text
        </button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleRevClick} disabled={text.length===0}>
          Reverse Text
        </button>
        {/* <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button> */}
      </div>
      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <h1>Text Summary</h1>
        <strong>
          {/* To display the word and characters count */}
          <p>
            {""}
            Your text has {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters. It takes {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to
            read.
          </p>
        </strong>
        <h2>Text Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
        {/* //To display the text preview.*/}
      </div>
    </>
  );
}
