import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    color: "white",
    padding: 10,
    // borderWidth: Platform.OS === "android" ? 0 : 2, // setting border only for ios
    //or
    borderWidth:Platform.select({ios:1 , android:0}),
    borderColor: "white",
    textAlign: "center",
    maxWidth: "80%",
    width: "300",
  },
});
