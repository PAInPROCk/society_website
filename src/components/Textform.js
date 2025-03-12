import React, { useState, useRef } from 'react';

export default function MyBox(props) {
  const [text, setText] = useState('');
  const textRef = useRef(null);

  const handleClickUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleClickLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    if (textRef.current) {
      textRef.current.select(); // ✅ Select text inside textarea
      navigator.clipboard.writeText(textRef.current.value); // ✅ Copy to clipboard
      document.getSelection().removeAllRanges(); // ✅ Deselect text
      props.showAlert("Copied to Clipboard!", "success");
    }
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert("Cleared Text!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert("Cleared Extra Spaces!", "success");
  };

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <textarea
          ref={textRef} // ✅ Attach ref to textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
          rows="10"
        ></textarea>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClickUpper}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClickLower}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Clear Extra Spaces</button>
      </div>

      <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((word) => word.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((word) => word.length !== 0).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
