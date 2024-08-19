import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../appData/dummy-data";

function MealsOverviewScreen({ route }) {

  const catId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals OverView screens - {catId}</Text>
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
