import React from 'react';
import {Link} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
export class PhotoDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            status:0,

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
        // console.log(this.props.post.content);
        //  var value=  this.props.post.content;
        // valu=value.substring(0,250);
        var currentLocation = this.props.location.pathname;
        var contentToDisplay;
        var displayFormat;
        console.log(currentLocation);
        if(currentLocation=='/'){
            contentToDisplay= <p className="col-xs-12 col-sm-12">{this.props.post.short}</p>;
            displayFormat=  <div className="col-xs-12 col-sm-3 newsBlocks">
                    <Link to={`/view/${this.props.post.code}`}>
                    <img src={this.props.post.display_src} height="300px" className="col-xs-12 col-sm-12 imageNews"/>
                    </Link>
                    <div className="col-xs-12 col-sm-12">
                     <h3 className="col-xs-12 col-sm-12">{this.props.post.heading}</h3>
                     {/*<p className="col-xs-12 col-sm-12">{this.props.post.short}</p>*/}
                     {contentToDisplay}
                         <div className="col-xs-12 col-sm-12">
                            <p> <b className="text-success">Likes: {this.props.post.likes}</b></p>
                            <Checkbox label="Bookmark?" />
                            <p><b className="text-info">What do you think about this news?</b></p>
                            <FlatButton className="" primary={true} onClick={this.incrementLikes}>Like</FlatButton>
                            <FlatButton className="" secondary={true} onClick={this.decrementLikes}>unlike</FlatButton>    
                         </div>
                    </div>
                </div>;
        }
        else{
            contentToDisplay= <p className="col-xs-12 col-sm-12">{this.props.post.content}</p>;
            displayFormat= <div className="col-xs-12 col-sm-12 newsBlocks">
                    <Link to={`/view/${this.props.post.code}`}>
                    <img src={this.props.post.display_src} height="300px" className="col-xs-12 col-sm-6 imageNews"/>
                    </Link>
                    <div className="col-xs-12 col-sm-6">
                     <h3 className="col-xs-12 col-sm-12">{this.props.post.heading}</h3>
                     {/*<p className="col-xs-12 col-sm-12">{this.props.post.short}</p>*/}
                     {contentToDisplay}
                         <div className="col-xs-12 col-sm-12">
                            <p> <b className="text-success">Likes: {this.props.post.likes}</b></p>
                            <Checkbox label="Bookmark?" />
                            <p><b className="text-info">What do you think about this news?</b></p>
                            <FlatButton className="" primary={true} onClick={this.incrementLikes}>Like</FlatButton>
                            <FlatButton className="" secondary={true} onClick={this.decrementLikes}>unlike</FlatButton>    
                         </div>
                    </div>
                </div>
        }
        return (
            <div className="  ">
                {displayFormat}
                {/*<Card >
    
    <CardMedia>
        <Link to={`/view/${this.props.post.code}`}>
      <img src={this.props.post.display_src} height="400px" className="col-xs-12 col-sm-6 imageNews"/>
      </Link>
    </CardMedia>
    <CardTitle title={this.props.post.heading} />
    <CardText>
      {this.props.post.content}
    </CardText>
    <CardActions>
      <p>Likes: {this.props.post.likes}</p>
      <FlatButton label="Like" primary={true} onClick={this.incrementLikes}/>
      <FlatButton label="Unlike" secondary={true} onClick={this.decrementLikes}/>
    </CardActions>
  </Card>*/}
            </div>
        );
    }
    
}
