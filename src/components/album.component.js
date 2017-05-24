import React from 'react';
import {PhotoDetails} from './photodetails.component';
export class AlbumComponent extends React.Component{
    render(){
        console.log(this.props.myposts,'anshu');
        var photoDetail=  this.props.myposts.map((item,index)=>{
                        return <PhotoDetails post={item} i={index} key={index}{...this.props}/>
                    })
        return (
            <div>
                <h1>I am album Component</h1>
               
                {photoDetail}
            </div>
        );
    }
}
