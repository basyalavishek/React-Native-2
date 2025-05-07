import { View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 36,
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
});
