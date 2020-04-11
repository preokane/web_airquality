import React, { Component } from 'react';
import '../Location.css';

class Measurement extends Component {


    render(){

        return(
        <p className="measurement"><b id="measureParameter">{this.props.measurement.parameter} : </b> {this.props.measurement.value} {this.props.measurement.unit}</p>
        );
    }

}

export default Measurement;