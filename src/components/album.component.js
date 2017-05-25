import React from 'react';
import {PhotoDetails} from './photodetails.component';
import AppBar from 'material-ui/AppBar';
export class AlbumComponent extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log('iniside cdm ')
        this.props.fetchPosts('http://localhost:3000/');
        // console.log(this.props.fetchData,'dsds');
    }
    render(){
        console.log(this.props.myposts,'anshu');
        var photoDetail=  this.props.myposts.map((item,index)=>{
                        return <PhotoDetails post={item} i={index} key={index}{...this.props}/>
                    })
        return (
            <div>
            <AppBar title={<h3 className="text-center">News In Short</h3>}/>
            <div className="row">
                {/*<h1 className="text-center bg-info">Latest News Updates</h1>*/}
                {photoDetail}
            </div>
            </div>
        );
    }
}
