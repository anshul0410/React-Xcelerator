import React from 'react';
import {PhotoDetails} from './photodetails.component';
export class PhotoComponent extends React.Component{
    render(){
        // fetch the parameters from url
        var code= this.props.params.id; // params always look for the content of url
        // this.props.param.id gives the content written after -- /view/ (content) -- this content and store in code
        const index= this.props.myposts.findIndex((post)=> post.code===code);// here we find the index of data for which
        // post.code which is present in post data and its value is equal to above mentioned code
        const currPost= this.props.myposts[index];
        // using currPost we take the data of myposts with index we got
        // then in return we call the photoComponent and pass prom post={currPost}{...this.props} and i={index}
        return (
            <div>
                <h1>I am photo Component</h1>
                <PhotoDetails post={currPost}{...this.props} i={index}/>
            </div>
        );
    }
}
