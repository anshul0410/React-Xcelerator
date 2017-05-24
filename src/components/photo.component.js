import React from 'react';
import {PhotoDetails} from './photodetails.component';
export class PhotoComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var code= this.props.params.id; 
        var index= this.props.myposts.findIndex((post)=> post.code===code);
        var currPost= this.props.myposts[index];
        return (
            <div>
                <h1>I am photo Component</h1>
                <PhotoDetails post={currPost}{...this.props} i={index}/>
            </div>
        );
    }
}
