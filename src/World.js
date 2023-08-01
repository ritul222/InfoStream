// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Business.css';
// function World(){
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const fetchNews = async () => {
//     try {
//       const response = await axios.get('https://newsapi.org/v2/everything?q=World&from=2023-06-23&sortBy=publishedAt&apiKey=08ec0f24c26e46ccb06ea9b75210d020&language=en');
//       setNews(response.data.articles);
//     } catch (error) {
//       console.log('An error occurred while fetching the news:', error);
//     }
//   };

//   const openArticle = (url) => {
//     window.open(url, '_blank');
//   };

//   return (
//     <div className="container">
//       <h1 className="heading">World</h1>
//       {news.map((article, index) => (
//         <div key={index} className="article">
//           <h2 className="title">{article.title}</h2>
//           <img src={article.urlToImage} alt={article.title} className="image" />
//           <p className="description">{article.description}</p>
//           <p className="published">Published at: {article.publishedAt}</p>
//           <button className="button" onClick={() => openArticle(article.url)}>Read Full Article</button>
//         </div>
//       ))}
//     </div>
//   );
    
// }
// export default World;



// 4HFZEMOS5VO0H7J8 stock
//https://api.openweathermap.org/data/2.5/weather?lat=23.623204537276756&lon=87.11041169523664&appid=1f723b10aa123a92e8989e6a67eac3b1&city=raniganj&country=India
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Business.css';


function World() {
  const [news, setNews] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
const [stockData, setStockData] = useState([]);
const tickerSymbols = ['AAPL', 'AMZN', 'GOOGL', 'TATASTEEL.NS'];

  useEffect(() => {
    fetchNews();
    fetchWeatherData();
    // fetchStockNews();
    fetchStockData();

  }, []);

  const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);


const formattedYesterday = yesterday.toISOString().slice(0, 10);


  const fetchNews = async () => {
    try {
      const newsApiKey =  process.env.REACT_APP_BUSINESS_API_KEY;
      const response = await axios.get(`https://newsapi.org/v2/everything?q=World&from=${formattedYesterday}&sortBy=publishedAt&apiKey=${newsApiKey}&language=en`);
      setNews(response.data.articles);
    } catch (error) {
      console.log('An error occurred while fetching the news:', error);
    }
  };

  const fetchWeatherData = async () => {
    try {
      const weatherApiKey =  process.env.REACT_APP_WEATHER_API_KEY;
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=22.51720989046079&lon=88.41877940111988&appid=${weatherApiKey}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.log('An error occurred while fetching weather data:', error);
    }
  };




  const fetchStockData = async () => {
    try {
      const stockApiKey =  process.env.REACT_APP_STOCK_API_KEY;
      const response = await axios.get(`https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=${stockApiKey}`);
      const stockData = response.data;
      setStockData(stockData);
    } catch (error) {
      console.log('An error occurred while fetching stock data:', error);
    }
  };
  


 

  const openArticle = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="container">
      <h1 className="heading">Business</h1>
  

<div className="panel">
        {weatherData ? (
          <>
            <h2 className="weather-title">Weather</h2>
            <div className="weather-info">
              <img
                className="weather-icon"
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt="Weather Icon"
              />
              <p className="temperature">Temperature: {weatherData.main.temp}°C</p>
              <p className="feels-like">Feels like: {weatherData.main.feels_like}°C</p>
              <p className="temp-range">
                Min Temperature: {weatherData.main.temp_min}°C / Max Temperature: {weatherData.main.temp_max}°C
              </p>
              <p className="description">Description: {weatherData.weather[0].description}</p>
            </div>
            <br></br>
            {/* Stock Data */}
            {stockData && stockData.results && stockData.results.length > 0 && (
              <div className="stock-data">
               <h2 className="stock-title">
               
               Stocks <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"/></svg> 
                </h2>

                <div className="article">
                  <h3>{stockData.ticker}</h3>
                  <p>Volume: {stockData.results[0].v}</p>
                  <p>Volume Weighted: {stockData.results[0].vw}</p>
                  <p>Open: {stockData.results[0].o}</p>
                  <p>Close: {stockData.results[0].c}</p>
                  <p>High: {stockData.results[0].h}</p>
                  <p>Low: {stockData.results[0].l}</p>
                  <p>Timestamp: {stockData.results[0].t}</p>
                </div>
              </div>
            )}





          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    <h1>World</h1>
      {news.map((article, index) => (
        <div key={index} className="article">
          <h2 className="title">{article.title}</h2>
          <img src={article.urlToImage} alt={article.title} className="image" />
          <p className="description">{article.description}</p>
          <p className="published">Published at: {article.publishedAt}</p>
          <button className="button" onClick={() => openArticle(article.url)}>Read Full Article</button>
        </div>
      ))}
    </div>
  );
}




export default World;











