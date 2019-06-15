import React,{Component} from 'react';
import './UserOutput.css';
import AuthContext from '../../context/auth-context';

class UserOutput extends Component{

static contextType= AuthContext;
    render()
    {

      return(

        <div className="UserOutput">
        <p>I am {this.props.name}. I like {this.props.password}
                </p>
        </div>
      )
    }
}

export default UserOutput;
