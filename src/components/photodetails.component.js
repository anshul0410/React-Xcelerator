import React from 'react';
import {Link} from 'react-router';
export class PhotoDetails extends React.Component{
    render(){
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${this.props.post.code}`}>
                    <img src={this.props.post.display_src} height="100px" width="100px"/>
                    </Link>
                </div>
                <figCaption>
                     <p>{this.props.post.caption}</p>
                     <div className="controls-buttons">
                        <button className="likes" onClick={this.props.increment.bind(this, this.props.i)}>{this.props.post.likes}</button>
                        <button className="likes" onClick={this.props.decrement.bind(this, this.props.i)}>unlike</button>
                     </div>
                </figCaption>
            </figure>
        );
    }
}
// Link 