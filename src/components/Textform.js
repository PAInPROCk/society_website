import React, {useState} from 'react'


export default function MyBox(props) {
  const Handleclick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
  }

  const Handlelowclick =()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
  }

  const handleonchange =(event) =>{
    setText(event.target.value);
  }

  const handleCopy = (event)=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleClearClick =()=>{
    let newText ='';
    setText(newText)
  }

  const handleExtraSpaces =() =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text,setText] = useState('');
  // setText()
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
          <textarea className="form-control" value={text} id="MyBox" onChange={handleonchange} rows="10"></textarea>
          <button className='btn btn-primary mx-1'onClick={Handleclick}>Convert to Uppercase</button>
          <button className='btn btn-primary mx-1'onClick={Handlelowclick}>Convert to Lowercase</button>
          <button className='btn btn-primary mx-1' onclick={handleClearClick}>Clear Text</button>
          <button className='btn btn-primary mx-1' onclick={handleCopy}>Copy Text</button>
          <button className='btn btn-primary mx-1' onclick={handleExtraSpaces}>Clear Extra spaces</button>
          
    </div>
    <div className='conatiner my-3'>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
