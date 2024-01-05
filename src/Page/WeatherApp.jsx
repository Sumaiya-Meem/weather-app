import { useEffect, useState } from "react";
import "./WeatherApp.css";
import axios from "axios";
const WeatherApp = () => {
    const [data, setData] = useState({});
  const [location, setLocation] = useState("Bangladesh");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=097c9a5daccb743c11eafa92e4b6d383`;

  const searchData = () => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

 
  useEffect(() => {
    searchData();
  }, []);

  const searchHandler = (event) => {
    if (event.key === "Enter") {
      searchData();
    }
  };

  return (
    <div>
      <div className="main font-semibold">
        <div className="search" >
        <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchHandler}
        placeholder="Enter Location"
        type="text"
        className="p-2 w-[300px]"
      />
        </div>
        <div className="max-w-[700px] mx-auto px-4 relative  flex justify-between flex-col  h-[85%]">
          <div className=" w-[100%] mx-4">
            <div className="location">
              <p className="text-2xl">{data.name}</p>
            </div>
              <div>
                <h1 className="text-5xl">{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}</h1>
              </div>
              <div className="mt-10 description">
                <p className="text-2xl ">  {data.weather ? <p>{data.weather[0].main}</p> : null}</p>
              </div>
          </div>
          {data.name !== undefined &&
          <div className="bottom flex justify-evenly my-4 p-4 text-center rounded-xl bg-[#ffffff33] ">
            <div className="feels">
              {data.main ? <p className='text-2xl font-semibold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>
                Feels Like
              </p>
            </div>
            <div className="humidity">
            {data.main ? <p className='text-2xl font-semibold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div >
            {data.wind ? <p className='font-semibold text-2xl'>{data.wind.speed.toFixed()} MPH</p> : null}

                <p>Wind</p></div>
          </div>
}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
