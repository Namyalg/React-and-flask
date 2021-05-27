import React, { Component } from 'react'
import './Header.css'

//use of reace environment variables in order to prevent
//exposing API keys

const { REACT_APP_MY_ENV } = process.env; 

class Weather extends Component {
    constructor(){
        super();
        this.state = {
            city : '',
            tempShow : false,
            temp : 0
        }
    }
    
    setcity = event => {
        this.setState({
            city : event.target.value
        })
    }


    async getweather(){
        //use the backticks in order to get the value of the env variables
        const url = `https://api.openweathermap.org/data/2.5/weather?q=` + this.state.city + `&appid=${REACT_APP_MY_ENV}`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({
            tempShow : true,
            temp : data.main.temp - 273.3
        })
        console.log(this.state.tempShow);
    }
    render() {
        return (
            <div className="city">
                {/*this must be done always*/}
                City : <input value = {this.state.city} onChange={this.setcity}></input>
                <br></br>
                <p>{this.state.city}</p>
                {/* only when triggered */}
                <button onClick={() => this.getweather()}>Display weather</button>
               
                
                {this.state.tempShow ? <h2>The weather in {this.state.city} is {this.state.temp}</h2> : null}
            </div>
        )
    }
}
export default Weather;