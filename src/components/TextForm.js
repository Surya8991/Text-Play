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
  //To extract the mail id from the text.
  const handleEmailExtract = () => {
    let emailIds = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    if (emailIds != null) {
      setText(emailIds);
      props.showAlert("Extracted Email Ids from the text", "success");
    } else {
      props.showAlert("No email id found", "warning");
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
  
  //To extract links from the text.
  // const handleLinkExtract = () => {
  //   let links = text.match(
  //     /(http|https|ftp|ftps|file|ssh|sftp|ftp|file|telnet|webdav|news|nntp|mid|mailto|snews|irc|gopher|wais|prospero|z39.50s|z39.50r|z39.50|telnet|ms-help):\/\/[^\s]+/gi
  //   );
  //   if (links != null) {
  //     setText(links);
  //     props.showAlert("Extracted the links from the text", "success");
  //   } else {
  //     props.showAlert("No links found", "warning");
  //   }
  // }
  const handleLinkExtract = () => {
    const linkRegex = /(https?|ftp|ssh|telnet|webdav|news|nntp):\/\/[^\s/$.?#].[^\s]*/gi;
    const links = text.match(linkRegex);
  
    if (links !== null) {
      setText(links.join('\n'));
      props.showAlert('Links extracted from the text', 'success');
    } else {
      props.showAlert('No links found', 'warning');
    }
  };
  
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
          onClick={handleEmailExtract}
          disabled={text.length === 0}
        >
          Extract Emails
        </button>
        <button
          className="btn btn-dark mx-2 my-2"
          onClick={beautifyJSON}
          disabled={text.length === 0}
        >
          Beautify JSON
        </button>
        <button
          className="btn btn-dark mx-2 my-2"
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
          className="btn btn-dark mx-2 my-2"
          onClick={handleLinkExtract}
          disabled={text.length === 0}
        >
          Extract Links
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

      {/* To Host in Github Page */}
      {/* <div
      className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      id="about"
    >
      <h1>{props.title}</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={{ border: "2px solid white" }}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "dark" ? "#06283D" : "white",
                color: props.mode === "dark" ? "white" : "#06283D",
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
                backgroundColor: props.mode === "dark" ? "#06283D" : "white",
                color: props.mode === "dark" ? "white" : "#06283D",
              }}
            >
              <strong>Text-Utility-Pro</strong> allows you to use text quickly and
              efficiently. You can use it to convert text from UpperCase to
              LowerCase, to clear the text,Cut Text for twitter,Extract Emails
              ,copy it to the clipboard, capitalize each word, extract only text,
              extract only numbers, eliminate extra spaces, decode Base64, convert
              Base64 to text, reverse the text, and many more.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ border: "2px solid white" }}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "dark" ? "#06283D" : "white",
                color: props.mode === "dark" ? "white" : "#06283D",
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
                backgroundColor: props.mode === "dark" ? "#06283D" : "white",
                color: props.mode === "dark" ? "white" : "#06283D",
              }}
            >
              <strong>Text-Utility-Pro</strong> is a free online text formatter
              tool. Using <strong>Text-Utility-Pro</strong>, you can learn how many words,
              characters, and how long it takes to read the text. Thus
              <strong>Text-Utility-Pro</strong> is suitable for writing text with a
              word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ border: "2px solid white" }}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={{
                backgroundColor: props.mode === "dark" ? "#06283D" : "white",
                color: props.mode === "dark" ? "white" : "#06283D",
              }}
            >
              <h3>Free Download</h3>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#06283D" : "white",
                color: props.mode === "dark" ? "white" : "#06283D",
              }}
            >
              With <strong>Text-Utility-Pro</strong> you can download the contents of the text in Text.txt name.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ border: "2px solid white" }}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "dark" ? "#06283D" : "white",
                color: props.mode === "dark" ? "white" : "#06283D",
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
                backgroundColor: props.mode === "dark" ? "#06283D" : "white",
                color: props.mode === "dark" ? "white" : "#06283D",
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
    About Section Ends here */}

    </>
  );
}
