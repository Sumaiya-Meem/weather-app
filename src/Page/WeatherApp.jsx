import './WeatherApp.css'
const WeatherApp = () => {
    return (
        <div className='main'> 
            <div className="container">
               <div className="top">
                    <div className="location">
                        <p>London</p>
                    </div>
                    <div>
                        <h1>60C</h1>
                    </div>
                    <div className="description"><p>Clouds</p></div>
               </div>
               <div className="bottom">
                      <div className="feels"><p>60C</p></div>
                      <div className="humidity"><p>20%</p></div>
                      <div className="wind">12MPH</div>
               </div>
            </div>
            
        </div>
    );
};

export default WeatherApp;