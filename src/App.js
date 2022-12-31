import axios from 'axios';
// import { FaBitcoin } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [height, setHeight] = useState(0);

  const fetchBlockHeight = async () => {
    try {
      let response = await axios.get(`https://blockstream.info/api//blocks/tip/height`);
      console.log(response.data)
      setHeight(response.data);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBlockHeight();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p className='Block'>{height}</p>
        <p>Tick Tock, Next Block!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Me A Steak 🥩
        </a>
      </header>
      {/* <footer className='App-footer'>
        <div>
          <div>
            <FaBitcoin />
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
