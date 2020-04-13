import React from 'react';
import { connect } from 'react-redux';

import browserActionCreator from '../Redux/actionCreators/actionCreators'


class BrowserAPI extends React.Component{
    constructor(props){ // this is uselss
        super(props)

    }

    actionCreator(){ // this function needs to be binded 
      this.props.browserActionCreator('this is another one')
    }

    render(){
        console.log(this.props.browserActionCreator)
        return(
            <div>
                <button onClick={actionCreator}>Click me </button>
            </div>
        )
    }
}

const actionCreators ={
    browserActionCreator
}

const connectedBrowserAPI = connect(null,actionCreators)(BrowserAPI)
export default connectedBrowserAPI;
