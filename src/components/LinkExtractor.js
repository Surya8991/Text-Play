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
                    onClick={handleLinkExtract}
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
