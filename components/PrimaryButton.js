import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={Styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [Styles.buttonInnerContainer, Styles.rippleIos]
            : Styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary600 }}
        onPress={onPress}
        // here onPress on right is a prop , So when the button is pressed, it calls the function you sent in the onPress prop in StartGameScreen which is confirmInputHandler and resetInputHandler
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
    backgroundColor: Colors.primary500,
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
