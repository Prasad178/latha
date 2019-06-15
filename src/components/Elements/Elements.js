import React from 'react';
import './Elements.css';
const elements =(props)=>
{
let inputTypes=null;
  switch(props.elementType)
    {
      case('input'):
          inputTypes=  <input className="InputElementType" {...props.elementConfig} onChange={props.changed} value={props.elementConfig.value}/>
            break;
      case('textarea'):
          inputTypes=  <textarea  className="InputElementType" {...props.elementConfig} onChange={props.changed} value={props.elementConfig.value}/>
            break;
      default:
        inputTypes=<input className="InputElementType" {...props.elementConfig}/>
        break;
    }
  return(
      <React.Fragment>
      <div className="TextInput">
      <label className="TextLabel"> {props.id}:</label></div>
      <div>  {inputTypes}</div>
      </React.Fragment>

  )
}
export default elements;
