import { View, Text, Button } from "react-native";
import React from "react";
import usePumpkin from "../states/usePumpkin";

export default function PersistentState() {
  const { pumpkin, setPumpkin } = usePumpkin();

  return (
    <View>
      <Text>Persistent State</Text>
      <Text>Save the pumpkins! This pumpkin will survive!</Text>
      <Text>{pumpkin}</Text>
      <Button
        onPress={() => setPumpkin("Pumpkin" + Math.random().toFixed(2))}
        title="Update Pumpkin"
      />
    </View>
  );
}
