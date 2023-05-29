import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import useUser from "../states/useUser";

export default function Header() {
  const { user, setUser } = useUser();

  return (
    <View style={styles.container}>
      <Text>Logged as: {user?.name}</Text>
      <Button onPress={() => setUser(null)} title="Logout" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 48,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
