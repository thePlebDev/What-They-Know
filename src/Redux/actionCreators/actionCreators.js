import { BROWSER_API } from './types'


function browserActionCreator(text){
    return{
        type:BROWSER_API,
        payload:{
            text: text
        }
    }
}

export default browserActionCreator
