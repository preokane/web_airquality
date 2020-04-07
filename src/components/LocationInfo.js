import React, { Component } from 'react';
import Measurement from './Measurement';
import '../Location.css';

class LocationInfo extends Component {


    render(){
        return(
            <div>
                {this.props.locations.map((location,i) => <div className="locationDiv" key={i}>
                    {location.location}
                    {location['measurements'].map((measure,ind) => <Measurement key={ind} measurement={measure}/>)}                
                    </div>)}
            </div>
        );
    }

}

export default LocationInfo;