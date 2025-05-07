import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";

function StartGameScreen({ onConfirmNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber); // this will try to convert the string into integer but can't convert if the entered value is character like $ , % , etc
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // isNaN means if chosenNumber is not a number
      Alert.alert("Invalid Number!", "Number should be between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      // alert takes three parameters : first is title of alert , second is message to be displayed for alert and third is button that we want to show . On invalid input it shows alert messsage with button "okay"
    }
    onConfirmNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>
            {" "}
            {/* here onPress is prop passed from PrimaryButton.js */}
            Reset
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          {/* here onPress is a prop */}
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4, // it means shadow effect and works only for android
    // to use shadow on ios we have to use shadowColor , shadowOffset, shadowRadius and shadowOpacity
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
  },
});
