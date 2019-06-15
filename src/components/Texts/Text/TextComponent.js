import React,{Component} from 'react';


const TextComponent=(props)=>
{

return(

 <p className="TextComponent" onClick={props.click}>{props.textChanged}</p>

)

}
export default TextComponent;
