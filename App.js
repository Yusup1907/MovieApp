import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import MovieScreen from "./src/screens/MovieScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen"; // Import SplashScreen

const Stack = createStackNavigator();

export default () => {
  const [fontLoaded] = useFonts({
    Regular: require("./assets/fonts/static/NunitoSans_10pt-Regular.ttf"),
    Bold: require("./assets/fonts/static/NunitoSans_10pt-Bold.ttf"),
    Black: require("./assets/fonts/static/NunitoSans_10pt-Black.ttf"),
    ExtraBold: require("./assets/fonts/static/NunitoSans_10pt-ExtraBold.ttf"),
    ExtraLight: require("./assets/fonts/static/NunitoSans_10pt-ExtraLight.ttf"),
    Light: require("./assets/fonts/static/NunitoSans_10pt-Light.ttf"),
    SemiBold: require("./assets/fonts/static/NunitoSans_10pt-SemiBold.ttf"),
  });

  // Prevent auto hide of the splash screen
  SplashScreen.preventAutoHideAsync().catch(console.warn);

  // Hide the splash screen once fonts are loaded
  React.useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync().catch(console.warn);
    }
  }, [fontLoaded]);

  return fontLoaded ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="movie"
          component={MovieScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : null; // Return null instead of AppLoading
};
