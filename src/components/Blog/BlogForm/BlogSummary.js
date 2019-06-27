import React,{Component} from 'react';
import './BlogForm.css';
import Post from '../BlogDisplay/BlogDisplay';
import axios from 'axios';



class blogSummary extends Component
{
state={
  showBlog:false,
  error:false,
  blog:[]
}
componentDidMount()
{

axios.get('https://blog-prasad.firebaseio.com/blog-prasad.json')
      .then(response=>{
            console.log("I am called....."+response.data);
            const gallerySection = response.data.map((gallery, i) => {
                  return {
                      ...gallery
                    }})
                this.setState({blog:gallerySection})
                        }
          ).catch(error=>{
              this.setState({error:true})})

}
    render()
    {
      let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
              if (!this.state.error) {
                  posts = this.state.blog.map(post => {
                      return <Post
                          key={post.id}
                          title={post.title}
                          author={post.author}
                          clicked={post.id}/>;
                  });
              }
  return(
    <React.Fragment>
        <div className="BlogForm">{this.state.error}
        {posts}
        <h1>Blog is loaded..{this.state.error}..</h1>

        </div>
        </React.Fragment>
    )
}

};
export default blogSummary;
