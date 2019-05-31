import React,{Component} from 'react';
import './App.css';
import ImageFile from './imageFile';
import State from './States'
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import './UserOutput.css';

 export default class App extends Component{

  state={
    username:"Latha",
    password:"Prasad"
  }

changeEventHandler=()=>
{
 this.setState({username: "Prasad",password: "Sports and investigation movies"})

}

clickedLoginHandlerSanjiv=()=>
{
  this.setState({username: "Latha",password: "LathaSanjiv"})

}
clickedLoginHandlerShivaani=()=>
{
  this.setState({username: "Latha",password: "LathaShivaani"})

}
clickedLoginHandlerPrasad=()=>
{
  this.setState({username: "Latha",password: "LathaPrasad"})

}

render()
{
  return (
    <div className="App">

      <header className="App-header">
                Welcome to our family website
                <UserInput changed={this.changeEventHandler} name={this.state.username}/>&nbsp;&nbsp;
                <p className="UserOutput"><button onClick={this.clickedLoginHandlerSanjiv}>Sanjiv </button>&nbsp;&nbsp;
               <button onClick={this.clickedLoginHandlerShivaani}>Shivaani </button>&nbsp;&nbsp;
              <button onClick={this.clickedLoginHandlerPrasad}>Prasad </button></p>&nbsp;&nbsp;
                {
                  this.state.password=="LathaShivaani"?
                <div>
                <ImageFile name="LathaShivaani.png"/>
                <ImageFile name="sample.gif"/>
                <State/>
                </div>:null
                }
                {
                  this.state.password=="LathaSanjiv"?
                <div>
                <ImageFile name="HappyBirthday.png"/>
                <ImageFile name="sample.gif"/>
                <State/>
                </div>:null
                }
                {
                  this.state.password=="LathaPrasad"?
                <div>
                <ImageFile name="LathaPrasad.jpg"/>
                <ImageFile name="sample.gif"/>
                <State/>
                </div>:null
                }

                </header>

    </div>
  );
}
}
