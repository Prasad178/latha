import React,{Component} from 'react'


export default class States  extends Component
{
constructor(){
  super();
  this.state = {name:'Texas',capital:'Austin'};
}
   render(){

     return(

       <div>
            We all are living in {this.state.capital}, Capital of {this.state.name}
       </div>
     )
   }


}
