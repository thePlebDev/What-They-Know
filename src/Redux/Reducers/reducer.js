import { BROWSER_API } from '../actionCreators/types'

const initialState = {
    browser:{
        geo:{
            lat:'this is where the lat goes',
            lon: 'this is where the lon goes'
        },
        storage:'nothing here yet',
        history:'nothing here yet'
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

        return { ...state, browser:{
            geo:{
                lat:action.payload.lat,
                lon:action.payload.lon
            }
        }
        }

      default:
        return state
    }
}

export default reducer
