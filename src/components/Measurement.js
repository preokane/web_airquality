import React, { Component } from 'react';

class Measurement extends Component {


    render(){
        return(
        <p>{this.props.measurement.parameter} {this.props.measurement.unit} {this.props.measurement.value}</p>
        );
    }

}

export default Measurement;