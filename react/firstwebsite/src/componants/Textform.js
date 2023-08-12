import React, { useState } from 'react';


export default function Textform(props) {
    const [text, setText] = useState('');
    const handleupClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    };
    const handlelowClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    };
    const pad = ()=>
    {
        let a = text.toString();
        let newtext=a.padEnd(20,"..");
        setText(newtext);
    }
    const Clear= ()=>
    {
       
        let newtext= "";
        setText(newtext);
    }
    const copy= ()=>
    {
        var text=document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const Remove_Space=()=>
    {
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const handleonChange = (event) => { setText(event.target.value) }
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div ClassName="mb-3">
                    <textarea ClassName="form-control" id="mybox" rows="8" cols="170" value={text} onChange={handleonChange} placeholder='Enter Text Here' style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleupClick}>Convert To UpperCase</button>
                <button className="btn btn-primary ms-2" onClick={handlelowClick}>Convert To LowerCase</button>
                <button className="btn btn-primary ms-2" onClick={pad}>pad End Method to add (...) in last of string if string length not 20</button>
                <button className="btn btn-primary ms-2" onClick={copy}>Copy Text</button>
                <button className="btn btn-primary ms-2" onClick={Remove_Space}>Remove Extra Space</button>
                <button className="btn btn-primary ms-2" onClick={Clear}>Clear Text</button>
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minuts to above text read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to textbox above your text to preview it here"}</p>
            </div>
        </>
    );
}
