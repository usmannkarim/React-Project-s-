import { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ininval, setIninval] = useState("");
  const [showHistory, setShowHistory] = useState(false)
  const [searchHistory, setSearchHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${ininval}&appid=6cfcfb64531196392876af0512f22258&units=metric`
      );
      setData([response.data]);
      setLoading(false);
      setError(null);
      setSearchHistory((prevHistory) => [...prevHistory, ininval]);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  if (loading) {return <h3>Loading...</h3>;}

  return (
    <section className="Weather-app">
      <div className="container">
        <div className="app-content">
          <div className="content-header">
            <h2 className="heading">Weather App</h2>
            <p className="text">By: Muhammad Usman Karim</p>
          </div>
          <div className="condent-mid">
            <input
              type="text" value={ininval}
              placeholder="Enter country/city name..."
              onChange={(e) => setIninval(e.target.value)}
            />{" "}
            <br />
            <button className="submit-btn" onClick={fetchWeatherData}>
              Search
            </button>
          </div>
          <div className="content-end">
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <div key={index}>
                  <h2 className="text-title">Weather Report</h2>
                  {console.log(item)}
                  <h3 className="text-title"> '{item.name}'</h3>
                  <p>
                    <u>Temperature:</u> {item.main.temp} ℃ <br /> (Feel:{" "}
                    {item.main.feels_like} ℃)
                  </p>
                  <p><u>Humidity:</u> {item.main.humidity} %</p>
                  <p><u>Weather Description:</u> {item.weather[0].main}</p>
                  <button className="submit-btn showhstry-btn" onClick={()=> setShowHistory(true)}>Show History</button>
                </div>
              ))
            ) : (
              <p>
                <small>(Enter country/city name)</small>
              </p>
            )}
          </div>
        </div>

        {searchHistory && !showHistory? (
          <div> </div>
        ) : (
          <div className="search-history">
            {" "}
            <h3>Your Search History:</h3>
            <ul>
              {searchHistory.map((term, index) => (
                <li key={index}>{term}</li>
              ))}
            </ul>
            <button className="submit-btn showhstry-btn" onClick={()=> setShowHistory(false)}>Hide History</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
