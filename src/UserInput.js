import React,{Component} from 'react';

const UserInput=(props)=>
{
  const style=
  {
    border:'2px solid red'
  };
return(

  <div>
  <p>  UserName: <input type="text" name="UserName" onChange={props.changed} value={props.name} style={style}/>&nbsp;
      Password: <input type="text" name="Password" style={style}/>&nbsp;&nbsp;&nbsp;
      
      </p>
  </div>
)

}
export default UserInput;
