import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {

    const [text, setText] = useState("")
    const handleupclick = () => {
        console.log("uppercase was clicked" + text);
        console.log(text.toUpperCase)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Changed to UpperCase!", "success")
    }
    const handlelowclick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Changed to LowerCase!", "success")
    }
    const handleclearclick = () => {
        let newText = " ";
        setText(" ")
    }
    const handleonchange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }

    const handlecopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied Text!", "success")


    }


    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        // msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    //   It is targetted by the button 'speak':


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>

                <div>
                    <h3>{props.heading}</h3>
                    <div className="mb-3">
                        <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'white' : 'white', }} value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 " onClick={handleupclick}> UPPERCASE</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-3" onClick={handlelowclick}>lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-3" onClick={handleclearclick}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-3" onClick={handlecopy}>Copy Text</button>
                    <button disabled={text.length === 0} type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
                </div>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>You Text Here </h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length != 0 }).length} words and  {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview </h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
