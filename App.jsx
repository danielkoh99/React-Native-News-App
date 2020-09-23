import React, { useState, useEffect } from "react";
// import { AppLoading } from "expo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import Home from "./src/components/Sidebar";

const FontsLoader = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);
  if (!fontsLoaded) {
    return null;
  }

  return children;
};

const App = () => {
  return (
    <FontsLoader>
      <Home />
    </FontsLoader>
  );
};

export default App;
