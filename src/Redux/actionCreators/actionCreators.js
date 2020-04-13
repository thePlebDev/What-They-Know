import types from './types';


function browserActionCreator(text){
    return{
        type:types.BrowserAPI,
        payload:{
            text: text
        }
    }
}

export default browserActionCreator
