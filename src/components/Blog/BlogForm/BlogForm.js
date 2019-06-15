import React from 'react';
import './BlogForm.css';
import {Route} from 'react-router-dom';
import Elements from '../../Elements/Elements';

const blogform =(props)=>
{
    return(
        <React.Fragment>
         <div className="BlogForm">
        <Elements Label="Title" ElementType="input" /><br></br>
        <Elements Label="Content" ElementType="textarea" /><br></br>
        <Elements Label="Author" ElementType="input" /><br></br>
        <Elements  buttonName="Add Blog" ElementType="button" onClick={props.clicked}/>
        </div>
        </React.Fragment>
    )

};
export default blogform;
