import React,{Component} from 'react';
import './App.css';
import ImageFile from '../components/Images/Image/imageFile';
import State from '../cockpit/States'
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import ValidationText from '../components/Texts/Text/ValidationText';
import CharComponent from '../components/Texts/Text/CharComponent';
import TextComponent from '../components/Texts/Text/TextComponent';
import '../components/UserOutput/UserOutput.css';
import Persons from '../components/Persons/Persons';
import AuthContext from '../context/auth-context';

class App extends Component{
/*
If we use constructor then state can be called bellow
constructor is the first method called in the life cycle of creation*/
constructor(props)
{
super(props);
this.charElement=React.createRef();

}
  /*constructor(props)
  {
    console.log(" [App.js] constructor ")
    super(props);*/
    state={
      username:"Latha",
      password:"Prasad",
      validateText:"",
      taskName:"",
      fullText:"",
      textLengthHandle:"",
      showPersons:false,
      isAuthenticated:false,
      persons:[
        { id:'1978',name:'Murugaprasad',age:39},
        { id:'1981',name:'Angulakshmi',age:36},
        {id:'2007',name:'Sanjiv',age:12},
        {id:'2012',name:'Shivaani',age:7}
      ]

    }
  //}

/*
second method called in the lifecycle of react is getderivedStatefromprops
it is a n abstract method so use static
we can use props of App classes is here
*/
static getDerivedStateFromProps(props)
{
  console.log("[App.js] props from class");
  return null;
}
shouldComponentUpdate(nextprop,nextstate)
{
    console.log("[App.js] should component Update");
  return true;
}
/*
third method is the render method
fourth is child components if there is action in the child components then again getDerivedStateFromProps is called
componentDidMount is the method called after render
this mothod is used for http calls
*/
componentDidMount()
{
  console.log("[App.js] component didMount");
  this.charElement.current.focus();
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

checkLength=(event)=>
{
  this.setState({validateText:event.target.value});


}

deleteChar=(c,index)=>
{

  const text=[...this.state.validateText];
  console.log("splice"+text.splice(index,c.length));
  text.splice(index,1);
  this.setState({validateText:text.join("")});
}

addTaskHandler=()=>
{
  this.setState({fullText:this.state.taskName})
}

taskChangeHandler=(event)=>
{

this.setState({taskName:event.target.value})
}


textLenghtHandler=(event)=>
{
this.setState({textLengthHandle:event.target.value})


}
deleteTextHandler=(index)=>
{
let textToDeleted= this.state.textLengthHandle.split('');
textToDeleted.splice(index,1);
console.log("text deleted"+textToDeleted);
const textDeleted=textToDeleted.join('');
this.setState({textLengthHandle:textDeleted});
}

personClicked=(index)=>

{
const persons= this.state.persons.map((c,index)  =>
{
  let deleteperson= this.state.persons.splice(index,1);
  let deletedperson =deleteperson.join('');
  this.setState({persons:deletedperson})
})
}
showDetails=()=>
{
  const authenticate=this.state.isAuthenticated;
  this.setState({isAuthenticated:!authenticate});

  const doesShow=this.state.showPersons;
  this.setState({showPersons:!doesShow});

  }
render()
{
  const style={
    backgroundColor:'green',
    ':hover':{
      backgroundColor:'red',
      cursor:'pointer'
    }
  }
  let lathaShivaani=null;
  let lathaSanjiv=null;
  let lathaPrasad=null;
  let charsText=null;
  let taskList =null;
  let persondisplayed=null;
  let textAddition =null;
  if(this.state.showPersons){
  console.log("[App.js]  render method")

 textAddition =this.state.textLengthHandle.split('').map((c,index) =>{
       return(
         <CharComponent textChanged={c} key={index} click={()=>this.deleteTextHandler(index)}/>
       )}
)


persondisplayed=(

  <Persons persons={this.state.persons} clicked={this.personClicked}/>
)

  taskList=(

  <div>
  {[...this.state.taskName].map((c,index)=>
    {
      return(

  <TextComponent textChanged={this.state.fullText}
  key={index}
  />

);
})
}
    </div>
  )


charsText=(
    <div>

{[...this.state.validateText].map((c,index)=>
  {
    return(

    <CharComponent textChanged={c}
    key={index}
    click={() => this.deleteChar(c,index)}

    />
  );
})
}

  </div>
)
  if(this.state.password=="LathaShivaani")
  {
    lathaShivaani=(
  <div>
  <ImageFile name="LathaShivaani.png"/>
  <ImageFile name="LathaShivaani.gif"/>
  <State/>
  </div>);
  }
  if(this.state.password=="LathaSanjiv")
  {
    lathaSanjiv=(
      <div>
      <ImageFile name="HappyBirthday.png"/>
      <ImageFile name="sample.gif"/>
      <State/>
      </div>);
  }

  if(this.state.password=="LathaPrasad")
  {
    lathaPrasad=(
      <div>
      <ImageFile name="LathaPrasad.jpg"/>
      <ImageFile name="LathaPrasad.gif"/>
      <State/>
      </div>)
  }
}
  return (
    <div className="App">

      <header className="App-header">
   <button style={style} onClick={this.showDetails}>ShowAll</button>&nbsp;&nbsp;
                {this.props.appTitle}


              <AuthContext.Provider value={{authenticated:this.state.isAuthenticated,login:this.authenticate}}>

                <UserInput changed={this.changeEventHandler} name={this.state.username}  />&nbsp;&nbsp;
                </AuthContext.Provider>
                <p className="UserOutput"><button onClick={this.clickedLoginHandlerSanjiv}>Sanjiv </button>&nbsp;&nbsp;
               <button style={style} onClick={this.clickedLoginHandlerShivaani}>Shivaani </button>&nbsp;&nbsp;
              <button onClick={this.clickedLoginHandlerPrasad}>Prasad </button></p>&nbsp;&nbsp;

              {lathaSanjiv}{lathaShivaani}{lathaPrasad}
              Add Character:  <input type="text" ref={this.charElement} name="txtLength" onChange={this.textLenghtHandler} value={this.state.textLengthHandle}/>
                <ValidationText textChanged={this.state.validateText.length}/>

                  {charsText}
                Task List:
                    <input type="text" name="taskName" onChange={this.taskChangeHandler}/>&nbsp;<button onClick={this.addTaskHandler}> Add Task </button>
                    <p>
                    Task will be added here {taskList}
                    </p>

                    {persondisplayed}
                    <AuthContext.Provider value={{authenticated:this.state.isAuthenticated,login:this.authenticate}}>

                    <UserOutput name={this.state.username} password={this.state.password}/>
                    </AuthContext.Provider>
                </header>
{textAddition}
    </div>
  );
}
}
export default App;
