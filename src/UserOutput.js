import React,{Component} from 'react';
import './UserOutput.css';

const UserOnput=(props)=>
{
return(

  <div className="UserOutput">
  <p>I am {props.name}. I like {props.password}
          </p>
  </div>
)

}
export default UserOnput;
