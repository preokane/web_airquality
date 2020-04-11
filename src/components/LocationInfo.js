import React, { Component } from 'react';
import Measurement from './Measurement';
import '../Location.css';

class LocationInfo extends Component {


    render(){
        return(
            <div className="locationContainer">
                {this.props.locations.map((location,i) => <div className="locationDiv" key={i}>
                    <p className="locationName">Location: <b>{location.location}</b></p>
                    <br/>
                    <br/>
                    <div className="measureContainer">
                    {location['measurements'].map((measure,ind) => <Measurement key={ind} measurement={measure}/>)}       
                    </div>         
                    </div>)}
            </div>
        );
    }

}

export default LocationInfo;