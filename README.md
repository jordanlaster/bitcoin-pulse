# Bitcoin Pulse Check Chrome Extension
Take Bitcoin's pulse. Get the block height, sats per dollar, dollars per bitcoin, and more interesting stats.

## Inspiration
- I really like the look of startpage.com's chrome extension so I used it as inspiration for this one.

## Data
I used [Blockstream.info's API](https://github.com/Blockstream/esplora/blob/master/API.md) for the block height and [Coingecko's Free API](https://www.coingecko.com/en/api/documentation) for sats/dollar & dollars/bitcoin.
- Blockstream endpoint – https://blockstream.info/api//blocks/tip/height
- Coingecko endpoint – https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd
  - Note: it has a rate limit of 10-50 calls/minute, and doesn't require API key

## Would like to add
Stats:
- how many blocks till halving?
- how many blocks till difficulty adjustment?

Animation:
- Block icon should look like it's filling with transactions

## How to Create a Chrome Extension With React
[Getting Started with React Chrome Extensions Manifest V3](https://www.youtube.com/watch?v=IV-CgmgJDBo)

Written steps from video above: 
1. Manifest.json file is the only required file for Chrome Extensions and must be in the root directory. It records metadata, defines resources, gives permissions, and identifies files to run on page and in background.
2. Once your manifest.json is set, run `npm run build` in the cli. After that's done, notice a build file – with all the files from the public directory – has been built
3. Now go to the chrome://extensions/ page in your browser
4. Set it to Developer Mode, click Load Unpacked, navigate to your build folder generated in step 2 and select it.
5. Click extensions on your browser and voila! Your extension is now there
6. Your extension will have a small width and height to start. I navigated to index.css in the src directory and added `min-width: 360px;`
  `min-height: 510px;`

Note: You will need to run `npm run build` everytime you make changes to your app. To avoid this, check out [Hot Reload w/ React + Webpack Chrome Extensions (Manifest V3) Tutorial](https://www.youtube.com/watch?v=eN5eomaACDk) 

After the [Hot Reload w/ React + Webpack Chrome Extensions (Manifest V3) Tutorial](https://www.youtube.com/watch?v=eN5eomaACDk) youtube tutorial, you can run `npm run dev`. This reloads any of your code changes immediately. This has saved me A LOT of time.
