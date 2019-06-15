import React,{Component,useContext} from 'react';
import '../UserOutput/UserOutput.css';
import AuthContext from '../../context/auth-context';

const UserInput=(props)=>
{
  const authContext=useContext(AuthContext);
  const style=
  {
    border:'2px solid red'
  };
return(
<React.Fragment>
  <AuthContext.Consumer>
    {(context)=> context.authenticated?<p>Authenticated</p>: <p>Please Login da madaya</p>}
    </AuthContext.Consumer>
    {authContext.authenticated?<p>function useContext Authenticated</p>: <p>Please Login useContext da madaya</p>}
    <div className="UserOutput">
    {props.checkin?<p> Authenticated</p>:<p>Please Login</p>}
     UserName: <input type="text" name="UserName" onChange={props.changed} value={props.name} style={style}/>&nbsp;
    Password: <input type="text" name="Password" style={style}/>&nbsp;&nbsp;&nbsp;
    <button onClick={props.authenticate}>Login</button>

    </div>
</React.Fragment>

)

}
export default UserInput;
