import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../appData/dummy-data";

function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals OverView screens</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
