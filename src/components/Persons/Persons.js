import React,{Component} from 'react';

import Person from './Person/Person';
class Persons extends Component{
  static getDerivedStateFromProps(props,state)
    {
      console.log("[Perosn js] getDerivedFronStateFromProps")
      return state;
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("[Perosn js] shouldComponentUpdate")
      if(nextProps.persons!=this.props.persons)
      {

      return true;
    }
    else {
      return false;
    }
  }
   getSnapshotBeforeUpdate(prevProps,prevState)
   {
       console.log("[Perosn js] getSnapshotBeforeUpdate")
       return null;
   }
   componentDidUpdate()
   {
     console.log("[Perosn js] componentDidUpdate")
   }
   //Use the below when you need to clean up any resources like connection close
   //when components removed from the render then it called. example toggle hide components
componentWillUnmount()
{
  console.log("[Perosn js] componentWillUnmount")
}

  render()
  {
    return this.props.persons.map((person,index)=>{
      return (
        <Person
        name={person.name}
        age={person.age}
        key={person.id}
        click={()=>this.props.clicked(index)}/>
)})
}
};
export default Persons;
