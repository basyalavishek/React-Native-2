import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const PrimaryButton = ({ children, confirm_OR_Reset_Button }) => {
  return (
    <View style={Styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [Styles.buttonInnerContainer, Styles.rippleIos]
            : Styles.buttonInnerContainer
        }
        android_ripple={{ color: "#640233" }}
        onPress={confirm_OR_Reset_Button}
        // here confirm_Or_Reset_Button is a prop , So when the button is pressed, it calls the function you sent in the confirm_Reset_Button prop in StartGameScreen which is confirmInputHandler and resetInputHandler
      >
        <Text style={Styles.buttonText}>{children}</Text>
        {/* children is a special prop in React (and React Native) that allows you to pass content between the opening and closing tags of a component. */}
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const Styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },
  rippleIos: {
    opacity: 0.75,
  },
});
