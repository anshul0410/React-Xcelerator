import React from 'react';

 export default class MainComponent extends React.Component{
render(){
    console.log(this.props,'asd');
     return (
        <div className="container-fluid ">
            <h1>check Route</h1>
            {React.cloneElement(this.props.children,this.props)}
        </div>
        )
}


 }