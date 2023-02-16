import "./weather.css";

const Weather = ({ datas }) => {
    return (
        <div className="climate">
            <div className="top">
                <div>
                    <div className="nation-city">
                        <p className="city">{datas.city}</p>
                        <p className="country">{datas.sys.country}</p>
                    </div>
                    <p className="climate-description">{datas.weather[0].description}</p>
                </div>
                <img className="climate-icon"  src={`https://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`}  alt="weather" />
            </div>
            <div className="down">
                <p className="temp">{Math.round(datas.main.temp)}°C</p>
                <div className="detail">
                    <div className="row">
                        <span className="label" style={{color:'tomato',fontSize:"28px"}}>Details</span>
                    </div>
                    <div className="row">
                        <span className="label">Feels Like</span>
                        <span className="value">{Math.round(datas.main.feels_like)}°C</span>
                    </div>
                    <div className="row">
                        <span className="label">Wind</span>
                        <span className="value">{datas.wind.speed} m/s</span>
                    </div>
                    <div className="row">
                        <span className="label">Humidity</span>
                        <span className="value">{datas.main.humidity}%</span>
                    </div>
                    <div className="row">
                        <span className="label">Pressure</span>
                        <span className="value">{datas.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;