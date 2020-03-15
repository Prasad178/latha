import React,{Component} from 'react';
import BlogForm from './BlogForm/BlogForm';
import BlogSummary from './BlogForm/BlogSummary';
import {BrowserRouter,Route} from 'react-router-dom';
import Elements from '../Elements/Elements';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {

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
      }}
    }



  blogPostHandler=()=>
  {
    const blogdata={};

    for(let formElementIdentifier in this.state.blog )
    {
      blogdata[formElementIdentifier]=this.state.blog[formElementIdentifier].value;
    }
    axios.post('https://blog-prasad.firebaseio.com/blog-prasad.json',blogdata)
            .then(response =>
                    this.setState({blog:response.data}))
            .error(error=> console.log(error))
  }
  inputChangeHandler=(event,inputIdentifier)=>
  {
      const updatingblog={
        ...this.state.blog
      }
      const updatedblogElement={
        ...updatingblog[inputIdentifier]
      }
        updatedblogElement.value=event.target.value;
        updatingblog[inputIdentifier]=updatedblogElement;
        this.setState({blog:updatingblog});
        console.log("updatedblogElement.value"+updatedblogElement.value);
  }

 render()
 {
    const formelementsArray=[];
    for(let key in this.state.blog)
    {
      formelementsArray.push({
        id:key,
        config:this.state.blog[key]
      });
    }
    let formLoad=<form>
      {formelementsArray.map(formElement=>
          (<Elements
              id={formElement.id}
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.elementConfig}
              changed={(event)=>this.inputChangeHandler(event,formElement.id)}/>

          ))}<br></br>
    <button className="ButtonLabel" onClick={this.blogPostHandler}>Add Blog</button>
      </form>

   return(
      <BrowserRouter>
      <React.Fragment>
      <header>
      <nav>
        <ul>
          <li className="liLabel"><a href="/">Home</a></li>
          <li className="liLabel"><a href="/Blog">AddNew Blog</a></li>
          <li className="liLabel"><a href="/BlogSummary">BlogSummary</a></li>
        </ul>
      </nav>
      </header>
      {formLoad}
      <Route path="/" exact render={()=><h1>Home</h1>}/>
      <Route path="/BlogSummary" component={BlogSummary}/>

      </React.Fragment>
      </BrowserRouter>
   );
 }


}
export default Blog;