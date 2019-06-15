import React,{Component} from 'react';
import './BlogForm.css';
import axios from 'axios';

class blogSummary  extends Component
{
  state={
      blog:{
      Title:{
          elementType:'input',
          elementConfig:{
            type:'text',
            placeholder:'Title of the Blog'
          },
          value:''
      },
      Content:{
          elementType:'textarea',
          elementConfig:{
            type:'text',
            placeholder:'Content of the Blog'
          },
          value:''
      },
      Author:{
          elementType:'input',
          elementConfig:{
            type:'text',
            placeholder:'Author of the blog'
          },
          value:''
      }},
      showLoading:false
    }


componentDidMount()
{
  axios.get('https://blog-prasad.firebaseio.com/blog-prasad.json')
        .then(response=>{
           this.setState({blog:response.data.blog});
           this.setState({showLoading:true})
            })
}
    render()
    {
  /*const blogDetails=Object.keys(props.blog)
    .map(blogkey =>
    {
      return<li key={blogkey}><span>{blogkey}</span> :{props.blog[blogkey]}</li>
    });*/
    return(
        <div className="BlogForm">
          {this.state.showLoading?this.state.blog:'Yet to load'}
        </div>
    )
}

};
export default blogSummary;
