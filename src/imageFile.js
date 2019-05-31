import React from 'react';
import './imageFile.css';
const imageFile =(props)=>
{

  return(

    
    <div className="row">
    <div className="column">
      <img src={props.name}  className="family-header" alt="image" size="40%"/>
  </div>

</div>

);
};
export default imageFile;
