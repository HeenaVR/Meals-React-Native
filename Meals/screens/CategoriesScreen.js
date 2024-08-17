import { FlatList } from "react-native";
import { CATEGORIES } from "../appData/dummy-data";
// import CategoryGreedTile from "../Components/CategoryGridTile";
import CategoryGridTile from "../Components/CategoryGridTile";

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

function CategoriesScreen() {
  // This is component function - component would rerender
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}

export default CategoriesScreen;
