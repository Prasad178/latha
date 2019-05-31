import React,{Component} from 'react';
import './UserOutput.css';

const UserInput=(props)=>
{
  const style=
  {
    border:'2px solid red'
  };
return(

  <div className="UserOutput">
   UserName: <input type="text" name="UserName" onChange={props.changed} value={props.name} style={style}/>&nbsp;
  Password: <input type="text" name="Password" style={style}/>&nbsp;&nbsp;&nbsp;
  <button>Login </button>

  </div>
)

}
export default UserInput;
