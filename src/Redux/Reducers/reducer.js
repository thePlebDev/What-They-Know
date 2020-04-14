import { BROWSER_API } from '../actionCreators/types'

const initialState = {
    browser:{
        info:'Nothing to display yet'
    },

    google:{
        info:'Nothing to display yet'
    },

    twitter:{
        info:'Nothing to display yet'
    }

}


function reducer(state=initialState,action){
    switch (action.type){
      case BROWSER_API:

        return { info:action.payload.text, ...state}

      default:
        return state
    }
}

export default reducer
