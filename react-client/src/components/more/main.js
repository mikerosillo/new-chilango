import React from "react";
import Title from "./more";
import Form from "./from";
import Weather from "./weather";

const KEY = "e560fec7749a1c67c58c3ed77444f238";

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined

    }
    this.getWeather=this.getWeather.bind(this);
  }
  async getWeather(e) {
    e.preventDefault();
    const city= e.target.elements.city.value;
    const country= e.target.elements.country.value;
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${KEY}&units=metric');
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error:""
    });
  }
  render(){
    return(
      <div>
      <Title />
      <Form getWeather={this.getWeather}/>
      <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}/>
      </div>

    );
  }
}
export default Main;
