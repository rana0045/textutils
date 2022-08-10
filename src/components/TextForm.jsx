/** @format */

import { useState } from "react";
import React from "react";
 
export const TextForm = (props) => {
  const [text, settext] = useState("");
  const update = (e) => {
    settext(e.target.value);
  };

  const handleclick = () => {
    settext(text.toUpperCase());
    props.showalert("Text Converted to Uppercase" , "success : ")
  };
  const handleclicklower = () => {
    settext(text.toLowerCase());
    props.showalert("Text Converted to Lowercase" , "success : ")
  };

  const delet = () => {
    settext("");
    props.showalert("Text Deleted" , "alert : ")
  };

  const handlecopy = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    
  };
  //copy text
  const copytext = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text copied" , "success : ")
  };

  return (
    <>
      <div
        className='container ' 
        style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <textarea
          placeholder='Enter Text Here'
          className='form-control'
          id='mybox'
          onChange={update}
          value={text}
          rows='8'
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}></textarea>
      </div>
      <button onClick={handleclick} className='btn btn-primary my-3 mx-2'>
        Convert to upercase
      </button>
      <button onClick={handleclicklower} className='btn btn-primary my-3 mx-2'>
        Convert To Lowercase
      </button>

      <button onClick={handlecopy} className='btn btn-primary my-3 mx-2'>
        Remove Extra Space
      </button>

      <button onClick={copytext} className='btn btn-primary my-3 mx-2'>
        Copy Text on Clipboard
      </button>

      <button onClick={delet} className='btn btn-danger mx-3 my-2'>
        Cleaar text
      </button>

      <div
        className='container'
        style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1 className='my-3'>Your Text Summry</h1>
        <p>
          Your text has words <b>{text.split(" ").length} </b> and
          <b> {text.length}</b> letter
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> minutes read
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
};
