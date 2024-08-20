import { Text } from "react-native";

function MealDetailScreen({route}) {
  const mealId = route.params.mealId
  return <Text>Meal details screen ({mealId})</Text>
}

export default MealDetailScreen;
