import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    padding: 10,
    borderWidth: 2,
    borderColor: "white",
    textAlign: "center",
  },
});
