import React,{useState} from 'react'


export default function TextForm(props) {
   
  const handleUpClick=()=>{
    //console.log("UpperCase was Clicked" + text);
    let newText=text.toUpperCase();
     setText(newText)
     props.showAlert("Converted to Uppercase","success");
  }
  
  const handleLoClick=()=>{
    //console.log("UpperCase was Clicked" + text);
    let newText=text.toLowerCase();
     setText(newText)
     props.showAlert("Converted to Lowercase","success");
  }
  const handleClearClick=()=>{
    let newText="";
     setText(newText);
     props.showAlert("Text cleared")
     props.showAlert("Text Cleared","success");

    }

    const handlecopy = ()=>{
      //console.log("i am a copy");
      //var text = document.getElementById("mybox")
      //text.select()
     // document.getSelection().removeAllRanges()
      // text.setSelectionRange(0,9999)
      navigator.clipboard.writeText(text);
      props.showAlert("Copied To Clipboard","success");

  }
   const speak=()=>{
    let msg=new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text Translated","success");


  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(""))
    props.showAlert("Removed Extra Spaces","success");

  }
  
  const handleOnChange=(event)=>{
   // console.log("On change");
    setText(event.target.value)
    
  }
 
  const [text,setText]=useState("");
  
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}}> 
  <h1 className='mb-2'>{props.heading}</h1>   
   <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} 
  style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>Convert To UpperCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
  <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" onClick={speak}>Speak</button>
  <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handlecopy}>Copy to clipboard</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length}characters</p>
      <p>{0.0008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
