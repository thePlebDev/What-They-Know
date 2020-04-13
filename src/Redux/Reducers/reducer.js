import types from '../actionCreators/types'

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
      case types.browserAPI:
        return {...state,text:action.payload.text}

      default:
        return state
    }
}

export default reducer
