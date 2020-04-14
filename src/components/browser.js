import React from 'react';
import { connect } from 'react-redux';

import browserActionCreator from '../Redux/actionCreators/actionCreators'


class BrowserAPI extends React.Component{
    constructor(props){ // this is uselss
        super(props)

        this.actionCreator = this.actionCreator.bind(this)

    }

    actionCreator(){
        //when called this would create a new execution context, that is not pointing to the right 'this'
        return this.props.browserActionCreator('another one')
    }

    render(){
        return(
            <div>
                <button onClick={this.actionCreator}>Click me </button>
            </div>
        )
    }
}

const actionCreators ={
    browserActionCreator
}

function mapStateToProps(state){
    console.log(state)
    return{
        state
    }
}

const connectedBrowserAPI = connect(mapStateToProps,actionCreators)(BrowserAPI)
export default connectedBrowserAPI;
