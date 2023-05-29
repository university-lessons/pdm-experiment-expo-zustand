import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import React from "react";
import useFavorites from "../states/useFavorites";

export default function FavoritesList() {
  const { favorites, addFavorite, removeFavorite, clickFavorite } =
    useFavorites();

  return (
    <View style={styles.container}>
      <Text>Favorites List (Shared Map with immer Experiment)</Text>

      <Button
        onPress={() =>
          addFavorite(Math.random(), {
            url: "www.randomurl.com/" + Math.random().toFixed(2),
            clicks: 0,
          })
        }
        title="Add Random Favorite"
      />

      <ScrollView>
        {Array.from(favorites.entries()).map(([id, favorite]) => (
          <View key={id} style={styles.favorite}>
            <Text>{favorite.url}</Text>

            <View style={styles.actions}>
              <Button
                onPress={() => clickFavorite(id)}
                title={"Clicks: " + favorite.clicks}
              />

              <Button
                color="red"
                onPress={() => removeFavorite(id)}
                title={"X"}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "50%",
  },

  favorite: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 8,
  },

  actions: {
    flexDirection: "row",
  },
});
