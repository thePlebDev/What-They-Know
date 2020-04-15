import { BROWSER_API } from './types'


function browserActionCreator(lat,lon){
    return{
        type:BROWSER_API,
        payload:{
            lat,
            lon
        }
    }
}

export default browserActionCreator
