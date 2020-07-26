import React,{Component,Suspense} from 'react';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';
import blogSummaryImport from './BlogForm/BlogSummary';
import addBlogImport from './AddBlog';
import logo from '../Images/Image/Karthi.gif';
import anilogo from '../Images/Image/Karthi.mp4';
import voiceover from '../Images/Image/Karthi.mp4';

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
          <img src={logo} alt="loading..." />
          <video controls autostart autoPlay src={anilogo} type="video/mp4" />
          <video controls autostart autoPlay src={voiceover} type="video/mp4" />
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
