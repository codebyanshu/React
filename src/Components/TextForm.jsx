import { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLowclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleOnClick = (event) => {
        setText(event.target.value)
    }
    const Emptyclick = (event) => {
        setText("");
        props.showAlert("Cleared test", "success")
    }
    
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", "success")
        
    }
    const handleRemoeExtra = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed", "success")

    }



    return (
        <>
            <div className=" container" style={{
                color: props.darkMode === 'dark' ? 'white' : 'black',
            }} >
                <h1 >{props.heading}</h1>
                <div className=" my-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnClick} style={{
                        backgroundColor: props.darkMode === 'dark' ? '#1d1d2a' : 'white',
                        color: props.darkMode === 'dark' ? 'white' : 'black',
                    }}></textarea>
                </div>
                <button disabled={text.length===0} type="button" className="btn btn-primary my-1" onClick={handleUpclick}>ToUpperCase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary my-1 mx-1" onClick={handleLowclick}>ToLowerCase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary my-1 mx-1" onClick={Emptyclick}>Clear Text</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary my-1 mx-1" onClick={handleRemoeExtra}>Remove Space</button>
            </div>
            <div className='container my-3' style={{
                color: props.darkMode === 'dark' ? 'white' : 'black',
            }}>
                <h2>Your text summary :</h2>
                <p>{text.split(" ").filter(elem=>elem.length !== 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter(elem=>elem.length !== 0).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
