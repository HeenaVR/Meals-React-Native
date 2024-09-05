import { useLayoutEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../appData/dummy-data";
import MealDetails from "../Components/MealDetails";
import Colors from "../constants/colors";
import Subtitle from "../Components/MealDetail/Subtitle";
import List from "../Components/MealDetail/List";
import IconButton from "../Components/IconButton";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("Pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color={Colors.appAccentColor}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <View style={styles.listSectionContainer}>
            <List data={selectedMeal.ingredients} />
          </View>
          <Subtitle>Steps</Subtitle>
          <View style={styles.listSectionContainer}>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: Colors.appTextColor,
  },
  listSectionContainer: {
    backgroundColor: Colors.appPrimaryLightV1Color,
    marginHorizontal: 20,
    borderRadius: 6,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "100%",
  },
});
