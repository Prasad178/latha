import React,{Component} from 'react';


const ValidationText=(props)=>
{

let validatedMessage=  "Text is too short";

if(props.textChanged>=5)
  {
validatedMessage ="Text is enough";
}
return(
  <div className="UserOutput"
  textChanged={props.textChanged}>
 {validatedMessage}
  </div>
)

}
export default ValidationText;
