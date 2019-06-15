import React,{Component} from 'react';
import AuthContext from '../../../context/auth-context';
class Person extends Component{

  static contextType=AuthContext;

  render()
  {
    return(
      <React.Fragment>
        <div key="div2id" onClick={this.props.click}>
      <p key="id1">
      Name: {this.props.name}
      </p>
      </div>
      <div key="div1id">
      <p key="id2">
      Age: {this.props.age}
      </p>
      </div>
    </React.Fragment>)

  }
}

export default Person;
