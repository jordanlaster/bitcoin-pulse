# To Do
- add tailwind css
- style block height
- cache block height and update cache if new block height exists
- move extension to upper right (like other extensions I have)
- add exit button in top right of extension
- make styling responsive (like block font)

Bonus 
- add how far it is from the halving
- add how far it is till difficulty adjustment

# How to Create a Chrome Extension With React
[Getting Started with React Chrome Extensions Manifest V3](https://www.youtube.com/watch?v=IV-CgmgJDBo)

Written steps from video above: 
1. Manifest.json file is the only required file for Chrome Extensions and must be in the root directory. It records metadata, defines resources, gives permissions, and identifies files to run on page and in background.
2. Once your manifest.json is set, run `npm run build` in the cli. After that's done, notice a build file – with all the files from the public directory – has been built
3. Now go to the chrome://extensions/ page in your browser
4. Set it to Developer Mode, click Load Unpacked, navigate to your build folder generated in step 2 and select it.
5. Click extensions on your browser and voila! Your extension is now there
6. Your extension will have a small width and height to start. I navigated to index.css in the src directory and added `min-width: 400px;`
  `min-height: 600px;`

Note: You will need to run `npm run build` everytime you make changes to your app. To avoid this, check out [Hot Reload w/ React + Webpack Chrome Extensions (Manifest V3) Tutorial](https://www.youtube.com/watch?v=eN5eomaACDk) 

After the Hot Reload youtube tutorial, you can run `npm run dev` to reload your extension changes immediately

## Fetching Data
- I'm fetching data from [Blockstream's](https://blockstream.info/) public Bitcoin api
- I'm using the Bitcoin endpoint -> https://blockstream.info/api/) in [this repo](https://github.com/Blockstream/esplora/blob/master/API.md)
- It's a simple GET request to https://blockstream.info/api//blocks/tip/height

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
