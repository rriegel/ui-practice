import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Wrapper from './components/Wrapper';
import {useState, useEffect} from 'react';

function App() {
  const [global, setGlobal] = useState({});
  const [date, setDate] = useState("");
  useEffect(() => {
    const getGlobal = async () => {
      const url = 'https://api.covid19api.com/summary';
      const result = await axios.get(url);
      setGlobal(result.data.Global);
      let date = new Date(result.data.Global.Date);
      date = date.toString().split(' ');
      setDate(date.slice(0, 4).join(' '));
    }
    getGlobal();
  }, [date]);

  console.log(global);
  // create a top bar that contains the date and the title of the app
  // create a sidebar with the global data
  // create a search bar in the middile to search for country data
  return (
    <div>
      <Wrapper date={date}/>
      <div className="Global">
        <header className="Global-header">
          <h1>
            Global
          </h1>
          <p>
            New Confirmed Cases: {global.NewConfirmed}
          </p>
          <p>
            New Confirmed Cases: {global.NewConfirmed}
          </p>
          <p>
            Total Confirmed Cases: {global.TotalConfirmed}
          </p>
          <p>
            New Deaths: {global.NewDeaths}
          </p>
          <p>
            Total Deaths: {global.TotalDeaths}
          </p>
        </header>
      </div>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

    </div>
  );
}

export default App;