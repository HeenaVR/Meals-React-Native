import { FlatList } from "react-native";
import { CATEGORIES } from "../appData/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";

function CategoriesScreen({ navigation }) { // This is components function

  function renderCategoryItem(itemData) {

    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  // This is component function - component would rerender
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
