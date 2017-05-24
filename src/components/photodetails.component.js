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

        return (
            <div className="">
                <div className="">
                    <Link to={`/view/${this.props.post.code}`}>
                    <img src={this.props.post.display_src} height="100px" width="100px"/>
                    </Link>
                </div>
                <div>
                     <p>{this.props.post.caption}</p>
                     <div className="">
                        <p> Likes: {this.props.post.likes}</p>
                        <button className="" onClick={this.incrementLikes}>Like</button>
                        <button className="" onClick={this.decrementLikes}>unlike</button>
                     </div>
                </div>
            </div>
        );
    }
}
