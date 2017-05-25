import React from 'react';
import {PhotoDetails} from './photodetails.component';
import AppBar from 'material-ui/AppBar';
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
                 <AppBar title={<h3 className="text-center">News In Short</h3>}/>
                <PhotoDetails post={currPost}{...this.props} i={index}/>
            </div>
        );
    }
}
