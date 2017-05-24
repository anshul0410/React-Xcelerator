import React from 'react';
import {Link} from 'react-router';
export class PhotoDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            status:0
        }
        this.incrementLikes=this.incrementLikes.bind(this);
        this.decrementLikes=this.decrementLikes.bind(this);
    }
    incrementLikes(){
        console.log('insidde incremner like button')
        console.log(this.props.i);
        if(this.state.status!=1)
        this.props.fetchIncrementLike(this.props.i);
        this.setState({status:1});
    }
    decrementLikes(){
        if(this.state.status!=-1)
        this.props.fetchDecrementLike(this.props.i);
        this.setState({status:-1});
    }
    render(){
        console.log(this.props.post.content);
        //  var value=  this.props.post.content;
        // valu=value.substring(0,250);
        return (
            <div className="row  ">
                <div className="col-xs-12 col-sm-12 newsBlocks">
                    <Link to={`/view/${this.props.post.code}`}>
                    <img src={this.props.post.display_src} height="400px" className="col-xs-12 col-sm-6 imageNews"/>
                    </Link>
                <div className="col-xs-12 col-sm-6">
                     <h3 className="col-xs-12 col-sm-12">{this.props.post.heading}</h3>
                     <p className="col-xs-12 col-sm-12">{this.props.post.content}</p>
                     <div className="col-xs-12 col-sm-12">
                        <p> Likes: {this.props.post.likes}</p>
                        <button className="" onClick={this.incrementLikes}>Like</button>
                        <button className="" onClick={this.decrementLikes}>unlike</button>
                     </div>
                </div>
                </div>
            </div>
        );
    }
    
}
// PhotoDetails.defaultProps={
//    value: ''
// };
