import React,{Component,Suspense} from 'react';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';
import blogSummaryImport from './BlogForm/BlogSummary';
import addBlogImport from './AddBlog';

const blogSummary =React.lazy(()=>import('./BlogForm/BlogSummary'));
const addBlog =React.lazy(()=>import('./AddBlog'));

class Blog extends Component {

  render()
 {
   return(


      <BrowserRouter>
      <React.Fragment>
      <header>
      <nav>
          <h2>
          <img src="./Images/Image/Karthi.gif" />
          <NavLink to="/">Home</NavLink> &nbsp;&nbsp;
          <NavLink to="/AddBlog">NewBlog</NavLink>&nbsp;&nbsp;
          <NavLink to="/BlogSummary">BlogSummary</NavLink>&nbsp;&nbsp;
          <NavLink to="/Posts">Posts</NavLink>&nbsp;&nbsp;
          <NavLink to="/Users">Users</NavLink>
          </h2>
      </nav>
      </header>
      <Route path="/"/>
      <Route path="/BlogSummary" component={blogSummaryImport}/>
      <Route path="/AddBlog" component ={addBlogImport}/>
      <Route path="/Posts" render={()=> <Suspense fallback={<div>Loading..</div>}><blogSummary/></Suspense>}/>
      <Route path="/Users" render={()=> <Suspense fallback={<div>Loading..</div>}><addBlog/></Suspense>}/>
      </React.Fragment>
      </BrowserRouter>
   );
 }


}
export default Blog;
