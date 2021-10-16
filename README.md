# ShopAdvisr Frontend

React native app for ShopAdvisr.

## Running for development

Install dependencies
```
$ npm i
```

Link
```
$ react-native link react-native-linear-gradient
```

Start the Metro server with
```
$ npm start
```

Run for android
```
$ npm run android
```

## Building for production

The variables for signing are read from `~/.gradle/gradle.properties`, so ensure your file has the following:
```
SHOPADVISR_STORE_FILE=release.keystore
SHOPADVISR_KEY_ALIAS=release
SHOPADVISR_STORE_PASSWORD=
SHOPADVISR_KEY_PASSWORD=
```
