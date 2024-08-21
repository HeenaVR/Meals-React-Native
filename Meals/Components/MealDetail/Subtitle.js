import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Subtitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    color: Colors.appTextColor,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 4,
    backgroundColor: Colors.appPrimaryColor,
    borderRadius: 6,
  },
});
