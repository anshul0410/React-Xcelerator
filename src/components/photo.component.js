import React from 'react';
import {PhotoDetails} from './photodetails.component';
export class PhotoComponent extends React.Component{
    render(){
        
        var code= this.props.params.id; 
        
        const index= this.props.myposts.findIndex((post)=> post.code===code);
        
        const currPost= this.props.myposts[index];
        
        return (
            <div>
                <h1>I am photo Component</h1>
                <PhotoDetails post={currPost}{...this.props} i={index}/>
            </div>
        );
    }
}
