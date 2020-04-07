import React, { Component } from 'react';
import LocationInfo from './LocationInfo';
import '../Location.css';
import Axios from 'axios';

class LocationSelect extends Component {

    state = {
        countries: [],
        cities: [],
        locations: [],
        selectedCountry: null,
        selectedCity: null,
    }

    constructor(){
        super()
        this.changeCountry = this.changeCountry.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.search = this.search.bind(this);
    }
    
    componentDidMount() {
        Axios.get('http://localhost:8080/countries')
            .then(
            res => {
                this.setState({ countries: res.data[0].map(obj => [obj.code,obj.name]) })
            }
        );  
    }

    changeCountry(event){
        var selectedIndex = event.target.options.selectedIndex;
        var selected = event.target.options[selectedIndex].getAttribute('code');
        Axios.get('http://localhost:8080/cities?country='+selected)
            .then(
            res => {
                this.setState({ cities: res.data[0].map(obj => obj.name), selectedCountry: selected })
            }
        );  
    }

    changeCity(event){
        this.setState({ selectedCity: event.target.value })
    }

    search(event){
        Axios.get('http://localhost:8080/latest?city='+this.state.selectedCity)
            .then(
            res => {
                this.setState({ locations: res.data[0].map(obj => obj) })
            }
        );
    }
    
    render(){
        return (
        <div>
            <select className="locationSelector" defaultValue={'default'} onChange={this.changeCountry}>
                <option value="default" disabled>Choose a country</option>
                {this.state.countries.map((c,ind) => (<option key={ind} code={c[0]}>{c[1]}</option>))}     
            </select>
            <select className="locationSelector" defaultValue={'default'} disabled={!(this.state.selectedCountry)} onChange={this.changeCity}>
                <option value="default" disabled>Choose a city</option>
                {this.state.cities.map((ct,ind) => (<option key={ind}>{ct}</option>))} 
            </select>
            <button className="locationSearchBtn" disabled={!(this.state.selectedCity)} onClick={this.search}>
                Search
            </button>
            <LocationInfo locations={this.state.locations}/>
   
        </div>
        );
    }

}

export default LocationSelect;