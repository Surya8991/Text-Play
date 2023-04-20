import React, { useState } from "react";
export default function TextForm(props) {
  //To convert the text to uppercase.
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
  };
  //To convert the text to lowercase.
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!", "success");
  };
  //To clear the text.
  const handleclearText = () => {
    // window.speechSynthesis.cancel();
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text!", "success");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  //To extract the words from the text.
  const handletextExtract = () => {
    const words = text.match(/[a-zA-Z]+/g);
    if (words !== null) {
      const res = words.join(" ");
      setText(res);
      props.showAlert("Extracted the words from the text", "success");
    } else {
      props.showAlert("No words found in the text", "warning");
    }
  };  
    //To extract the number from the text.
  const handleNumExtract = () => {
    const digits = text.match(/[0-9]/g);
    if (digits != null) {
      const res = digits.join(" ");
      setText(res);
      props.showAlert("Extracted the Numbers from the text", "success");
    } else {
      props.showAlert("No number found", "warning");
    }
  };
  //To capitalize the first letter of each word.
  const capitalization = () => {
    let updatedText = "";
    let words = text.split(" ");
    words.forEach((word) => {
      let firstChar = word.charAt(0).toUpperCase();
      updatedText = updatedText + (firstChar + word.slice(1)) + " ";
    });
    setText(updatedText.trim());
    props.showAlert("Capitalized the first letter of each word", "success");
  };
  
  // To Reverse Text
  function handleRevClick() {
    if (text.length > 0) {
      setText(
        text
          .split("")
          .reverse()
          .join("")
      );
      props.showAlert("Reversed Text", "success");
    } else {
      props.showAlert("No text to reverse", "warning");
    }
  }  
  // Remove Extra spaces
  const handleExtraSpaces = () => {
    let newText = text.trim().split(/ +/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  
  //To copy to clipboard.
  const handleCopy = () => {
    if (text.length !== 0) {
      navigator.clipboard.writeText(text)
        .then(() => {
          props.showAlert("Copied to Clipboard", "success");
        })
        .catch((error) => {
          console.error("Failed to copy text: ", error);
          props.showAlert("Failed to copy text", "error");
        });
    } else {
      props.showAlert("No text to copy", "warning");
    }
  };
  
  //To cut the text for Twitter.
  const handleCut = () => {
    if (text.length > 180) {
      let newText = text.substring(0, 180);
      setText(newText);
      props.showAlert("Text is now 180 characters!", "success");
    } else {
      props.showAlert("Text is less than 180 characters!", "warning");
    }
  }
  
  //To Download the text.
  function handleDownload() {
    if (text.length !== 0) {
      var element = document.createElement("a");
      element.setAttribute("href", "data:text/plain;charset=utf-8," + text);
      element.setAttribute("download", "text.txt");
      element.click();
      props.showAlert("Downloaded the text", "success");
    } else {
      props.showAlert("No text to download", "warning");
    }
  }
  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  
  const handleStopClick = () => {
    window.speechSynthesis.cancel();
  };
  
  // To Beautify JSON
  const beautifyJSON = () => {
    try {
      let json = JSON.parse(text);
      let beautifiedJSON = JSON.stringify(json, null, 2);
      setText(beautifiedJSON);
      props.showAlert("JSON Beautified!", "success");
    } catch (error) {
      props.showAlert("Invalid JSON", "error");
    }
  };
  
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : '#06283D' }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <h5 className="mb-4">{props.des}</h5>
        <div className="mb-3">
          {/* Text area where you enter the text */}
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#06283D" : "white",
              color: props.mode === "dark" ? "white" : "#06283D",
            }}
            value={text}
            onChange={handleChange}
            id="myForm"
            rows="6"
            spellCheck="false"
          ></textarea>
        </div>
        <button
          className="btn btn-dark mx-2 my-2"
          onClick={handleUpperCase}
          disabled={text.length === 0}
        >
          Converting to Upper Case
        </button>
        <button
          className="btn btn-dark mx-2 my-2"
          onClick={handleLowerCase}
          disabled={text.length === 0}
        >
          Converting to Lower Case
        </button>
        <button
          className="btn btn-dark mx-2 my-2"
          onClick={handleclearText}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
        <button
          className="btn btn-dark mx-2 my-2"
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          className="btn btn-dark mx-2 my-2"
          onClick={handleCut}
          disabled={text.length === 0}
        >
          Text For twitter
        </button>
        <button
          className="btn btn-dark mx-2 my-2"
          onClick={capitalization}
          disabled={text.length === 0}
        >
          Capitalize each word
        </button>
        <button
          className="btn btn-dark mx-2 my-2"
          onClick={beautifyJSON}
          disabled={text.length === 0}
        >
          Beautify JSON
        </button>
        <button
          className="btn btn-dark mx-2  my-2"
          onClick={handletextExtract}
          disabled={text.length === 0}
        >
          Extract Text
        </button>
        <button
          className="btn btn-dark mx-2 my-2"
          onClick={handleNumExtract}
          disabled={text.length === 0}
        >
          Extract Numbers
        </button>
        <button
          className="btn btn-dark mx-2 my-2"
          onClick={handleExtraSpaces}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-dark mx-2 my-2"
          onClick={handleRevClick}
          disabled={text.length === 0}
        >
          Reverse Text
        </button>
        <button
          className="btn btn-lg btn-dark mx-2 my-2"
          onClick={handleDownload}
          disabled={text.length === 0}
        >
          Download Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-dark mx-2 my-2"
          onClick={handleSpeakClick}
        >
          Listen Now
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-dark mx-1 my-2"
          onClick={handleStopClick}
        >
          Stop Now
        </button>
      </div>
      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <h2>Your text summary</h2>
        <p>
          {/* {text.length > 0 ? text.trim().split(/\s+/).length : 0} words,{" "} */}
          {text.length} characters
        </p>
        <p>
          {0.08 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        {/* //To display the text preview.*/}
        <h2 className="my-3">Text Preview</h2>
        <p className="prev">{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
