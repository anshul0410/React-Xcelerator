import React from 'react';
import {PhotoDetails} from './photodetails.component';
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
                <h1 className="text-center">Latest News Updates</h1>
                {photoDetail}
            </div>
        );
    }
}
