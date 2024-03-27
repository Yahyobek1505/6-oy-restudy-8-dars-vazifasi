import { useState, useEffect } from "react";
import "./App.css";
// import Card from "./Card";

const api = {
    key: "4ab5bbab424e57831393cf5ba38d6684",
    base: "https://api.openweathermap.org/data/2.5/"

}

function App() {
  useEffect(() =>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((data) =>{
      setWeather(data)
      console.log(data);
    })
  
  }, [])
  
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState('');
 
  function handlesearch(e) {
    e.preventDefault();
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((data) =>{
      setWeather(data)
      console.log(data);
    })
  }

  return (
    <>
      <div className="main">
      <div className="container">
        <div className="app">
        <h1>Weather APP</h1>
        <input onChange={(e) => setSearch(e.target.value)} type="text"  placeholder="Search city/town"/>
       <button onClick={handlesearch} className="btn btn-info">Search</button>
        <div className="card-wrapper ">
             
        <h3>Name: {weather.name}</h3>
         <p>Temperature: {weather.main.temp}C</p> 
           <p>Weather: {weather.weather[0].main}</p>
          <p>Izoh: ({weather.weather[0].description})</p> 
        </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default App;
