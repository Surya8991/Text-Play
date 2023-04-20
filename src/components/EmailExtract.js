import React, { useState } from "react";
export default function TextForm(props) {
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
                    onClick={handleEmailExtract}
                    disabled={text.length === 0}
                >
                    Extract Links
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
                    className="btn btn-lg btn-dark mx-2 my-2"
                    onClick={handleDownload}
                    disabled={text.length === 0}
                >
                    Download Text
                </button>
            </div>
            <div
                className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
            >
                {/* //To display the text preview.*/}
                <h2 className="my-3">Text Preview</h2>
                <p className="prev">{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}
