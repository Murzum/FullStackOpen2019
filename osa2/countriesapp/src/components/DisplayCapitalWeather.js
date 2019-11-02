import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DisplayCapitalWeather = ({capital}) => {

    const [ capitalForecast, setCapitalForecast ] = useState([])
    const [ getData, setGetData ] = useState(false)

    useEffect(() => {
        axios
        .get(`http://api.weatherstack.com/current?access_key=5cf15db6f1c3315ef3193854956b91ad&query=${capital}`)
        .then(response => {
            setCapitalForecast(response.data)
            setGetData(true)
        })
    }, [capital])

    if (getData) {

        return(
            <div>
                <h2>Capital weather forecast</h2>
                <h3>Time: {capitalForecast.current["observation_time"]}</h3>
                <img src={capitalForecast.current.weather_icons[0]} crossOrigin="anonymous" height="100" width="auto" border="1" alt={capitalForecast.current.weather_descriptions[0]}></img>    
                <h3>Temperature: {capitalForecast.current["temperature"]} degrees Celcius</h3>
            </div>
        )
    }
    else {
        return (        
            <div>Weather forecast not available.</div>
        )
    }
}

export default DisplayCapitalWeather