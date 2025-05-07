import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
 

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRound , setGuessRound] = useState(0);

  const [fontsLoaded] = useFonts({   // fontsLoaded is a boolean
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!fontsLoaded){
    return <AppLoading/> // untill the fonts are loaded show loading screen
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRound(numberOfRounds)
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRound(0);
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />; // You're passing the pickedNumberHandler function to the StartGameScreen component.It gets passed as a prop named onConfirmNumber.

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    ); // left userNumber is prop and right userNumber is state value passed through prop
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber = {userNumber} roundsNumber  = {guessRound} onStartNewGame ={startNewGameHandler} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
