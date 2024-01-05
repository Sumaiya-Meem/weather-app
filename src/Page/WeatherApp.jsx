import "./WeatherApp.css";
import axios from "axios";
const WeatherApp = () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=097c9a5daccb743c11eafa92e4b6d383`;

  return (
    <div>
      <div className="main font-semibold">
        <div className="max-w-[700px] mx-auto px-4 relative top-[10%] flex justify-between flex-col border h-[90%]">
          <div className=" w-[100%] mx-4">
            <div className="location">
              <p className="text-2xl">London</p>
            </div>
              <div>
                <h1 className="text-5xl">60C</h1>
              </div>
              <div className="mt-10 description">
                <p className="text-2xl ">Clouds</p>
              </div>
          </div>
          <div className="bottom flex justify-evenly w-[100%] text-center p-4 my-4 mx-auto rounded-xl bg-[#ffffff33] ">
            <div className="feels">
              <p className="text-2xl">60C</p>
            </div>
            <div className="humidity">
              <p className="text-2xl">20%</p>
            </div>
            <div className="wind">12MPH</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
