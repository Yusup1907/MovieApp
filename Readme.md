# React Native - The Movie App

The movie app is a movie browsing app that builds completely on [**React Native**](https://reactnative.dev/) and [**Expo**](https://expo.io).

## Screenshot

![screenshots of the movie app]()

## Dependencies

- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)
- [Expo SplashScreen](https://docs.expo.dev/versions/latest/sdk/splash-screen/)
- [Expo Font](https://docs.expo.io/versions/latest/sdk/font/)
- [Expo Status Bar](https://docs.expo.io/versions/latest/sdk/status-bar/)

## Setup instructions

### 1. Clone Repository

```sh
# Clone the movie app
git clone https://github.com/Yusup1907/MovieApp.git
```

### 2. Install all dependencies

```sh
# navigate to app directory
cd MovieApp

npm install
```

### 3. Configuration

Add IMDB API-KEY inside .env

```json
# add imdb api-key here
"projectConfig": {
    "apiKey": "<put the api key from tmdb here>"
  }
```

### 4. Start the app

```sh
# using expo-cli
npx expo start

# using npm
npm start
```