import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 export default class MainComponent extends React.Component{
render(){
    console.log(this.props,'asd');
     return (
        <div className="container-fluid ">    
              <MuiThemeProvider>    
            {React.cloneElement(this.props.children,this.props)}
              </MuiThemeProvider>
        </div>
        )
}


 }