import { Accordion, AccordionItemHeading, AccordionItem, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";
import './wheather-forecast.css';


const WEEK_DAYS = 
     [
    'Sunday', 
    'Monday', 
    'Tuesday',
     'Wednesday',
      'Thursday', 
      'Friday', 
      'Saturday'
    ];

const ForeCast = ({ datas }) => {

    const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInWeek)
    );

    console.log(forecastDays);
   
    return (
        <>
         
            <label className="topic">Weekly Forecast</label>
            <Accordion allowZeroExpanded>
                {datas.list.splice(0, 7).map((item, indx) => (
                    // here i use react-accessible-accordion for drop down functionality for forcast.
                    
                    <AccordionItem key={indx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="forecast-data">
                                    <img alt="weather" className="icon"  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                                    <label className="day">{forecastDays[indx]}</label>
                                    <label className="detail">{item.weather[0].description}</label>
                                    <label className="minimum-maximum">{Math.round(item.main.temp_max)}°C | {Math.round(item.main.temp_min)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="details-all">
                                <div className="details-items">
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="details-items">
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="details-items">
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="details-items">
                                    <label>Wind speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="details-items">
                                    <label>Sea Level:</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className="details-items">
                                    <label>Feels Like:</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    );
}

export default ForeCast;