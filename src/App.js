import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data,setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=a80279bb635a4300a1c135839222203&q=${location}&format=json`


  const showWeather = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response)=> {
        setData(response.data)
        console.log(response.data)
      })
    }
  }

  return (
    <div className="App">
      <input
      value={location} 
      type="text" 
      placeholder='city'
      onChange={event => setLocation(event.target.value)}
      onKeyPress={showWeather}
      >
      </input>
      <div>
        {data.request ? <h1 style={{color:"black"}}>{data.request[0].query}</h1> : null}
      </div>
    </div>
  );
}

export default App;
