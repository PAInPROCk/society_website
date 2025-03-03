import React, {useState} from 'react'
import { useRef } from 'react';



export default function MyBox(props) {
  const textRef = useRef(null);
  const Handleclick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to uppercase!", "success")
  }

  const Handlelowclick =()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to lowercase!", "success")
  }

  const handleonchange =(event) =>{
    setText(event.target.value);
  }

  const handleCopy = () => {
    if (textRef.current) {
        textRef.current.select(); // Select text
        navigator.clipboard.writeText(textRef.current.value);
        props.showAlert("Copied to Clipboard!", "success");
    }
  };

  const handleClearClick =()=>{
    let newText = ' ';
    setText(newText)
    props.showAlert("Cleared Text!", "success") 
  }

  const handleExtraSpaces =() =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Cleared Extra Spaces!", "success")
  }

  const [text,setText] = useState('');
  // setText()
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
          <textarea className="form-control" value={text} id="MyBox" onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'#042743'}} rows="10"></textarea>
          <button className='btn btn-primary mx-1'onClick={Handleclick}>Convert to Uppercase</button>
          <button className='btn btn-primary mx-1'onClick={Handlelowclick}>Convert to Lowercase</button>
          <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
          <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
          <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Clear Extra spaces</button>
          
    </div>
    <div className='conatiner my-3' style={{color : props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
