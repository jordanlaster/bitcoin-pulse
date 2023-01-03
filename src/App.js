import axios from 'axios';
import { FaSearch, FaSquare, FaBitcoin, FaGithub, FaTwitter } from 'react-icons/fa';
import { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  const [height, setHeight] = useState(0);
  const [priceUsd, setPriceUsd] = useState(0);
  const [sats, setSats] = useState(0);
  const [blockInput, setBlockInput] = useState();

  const blockHeightUrl = "https://blockstream.info/api//blocks/tip/height";
  const priceUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
  let blockStreamUrl = `https://blockstream.info/block-height/${blockInput}?q=${blockInput}`

  const fetchBlockHeight = async () => {
    try {
      let response = await axios.get(blockHeightUrl);
      setHeight(response.data);
    } catch(error) {
      console.log(error);
    }
  }

  const fetchPrice = async () => {
    try {
      let response = await axios.get(priceUrl);
      let priceUsd = response.data.bitcoin.usd;
      setPriceUsd(Math.round(priceUsd));
      setSats(Math.round(100000000/priceUsd));
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBlockHeight();
    fetchPrice();
  }, []);

  return (
    <div className="App">
      <div className='Header'>
        <form
          id="block-height-form"
          className='Search'
          onSubmit={() => {
            window.open(blockStreamUrl, '_blank');
          }}
        >
          <input 
            className="Search-input"
            type="number"
            name="block-info"
            placeholder="Enter Block Height For Info (Ex: 770088)"
            autoComplete="off"
            onChange={e => setBlockInput(e.target.value)}
            value={blockInput}
          />
          <button type="submit" className='Search-btn'>
            <FaSearch className='Search-icon'/>
          </button>
        </form>
      </div>

      <div className='Top-panel'>
        <FaSquare className='Block-icon' />
        {/* <img className='Block-icon' src={logo} alt="Logo" /> */}
        <div className='Block-summary'>
          <div className='Block-title'>Block Height</div>
          <div className='Block-height'>{height}</div>
          <div className='Block-description'>
            Tick Tock, Next Block!
          </div>
        </div>
      </div>

      <div className='Bottom-panel'>
        <div className='Inner-container'>
          <div className='Data-display'>
            <div className="Stats">{sats}</div>
            <div className="Subtitle">Per Dollar</div>
            <div className="Title">Sats</div>
          </div>
          <div className='Data-display'>
            <div className="Title">Dollars</div>
            <div className="Stats">{priceUsd}</div>
            <div className="Subtitle">Per Bitcoin</div>
          </div>
          <button
            className='Bottom-btn'
            type='button'
            onClick={() => {
              window.open('https://bitcoin.clarkmoody.com/dashboard/', '_blank');
            }}
          >
            View more awesome stats!
          </button>
          <div className='Attribution'>
            <a
              href='https://coingecko.com'
              target='_blank'
              rel="noreferrer"
            >
              Sats/Dollars from Coingecko API
            </a>
          </div>
        </div>
      </div>
      <div className='Footer'>
        <a
          className='Footer-item'
          href='https://buddylasta.com/#donate'
          target='_blank'
          rel="noreferrer"
        >
          <FaBitcoin className='Footer-icon' />
          Donate
        </a>
        <a
          className='Footer-item'
          href='https://github.com/buddylasta/bitcoin-pulse-check'
          target='_blank'
          rel="noreferrer"
        >
          <FaGithub className='Footer-icon'/>
          Github
        </a>
        <a
          className='Footer-item'
          href='https://twitter.com/buddylasta'
          target='_blank'
          rel="noreferrer"
        >
          <FaTwitter className='Footer-icon' />
          Twitter
        </a>
      </div>
    </div>
  );
}

export default App;
