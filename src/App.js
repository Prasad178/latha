import React,{Component} from 'react';
import './App.css';
import ImageFile from './imageFile';
import State from './States'
import UserInput from './UserInput';
import UserOutput from './UserOutput';

 export default class App extends Component{

  state={
    username:"Sanjiv",
    password:"Science and Soccer"
  }

changeEventHandler=()=>
{
 this.setState({username: "Prasad",password: "Sports and investigation movies"})

}
render()
{
  return (
    <div className="App">

      <header className="App-header">

                Welcome to our family website
                <UserInput changed={this.changeEventHandler} name={this.state.username}/>
                  <ImageFile name="HappyBirthday.png"/>
            

                <ImageFile name="sample.gif"/>

                <State/>

                </header>

    </div>
  );
}
}
