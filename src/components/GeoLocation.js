import React from 'react';
import { connect } from 'react-redux';

import actionCreator from '../Redux/actionCreators/actionCreators'



class GeoLocation extends React.Component{

    componentDidMount(){
        const success = (position) =>{
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            this.props.geo(latitude,longitude)
        }

        function error(error){
            console.log(`ERROR(${error.code}): ${error.message}`)
        }

        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition(success,error)
        }else{
            console.log('nope, can not find location')
        }
    }


    render(){
        return(
            <div>
              This is coming from the Geo location api
            </div>
        )
    }
}


const creators = {
    geo:actionCreator
}

const connectedGeoLocation = connect(null,creators)(GeoLocation)

export default connectedGeoLocation
