import { View, Text, Button } from "react-native";
import React from "react";
import usePopupMenu from "../hooks/usePopupMenu";

import { AntDesign } from "@expo/vector-icons";

export default function PopupMenuExample() {
  const popupMenu1 = usePopupMenu([
    {
      icon: <Text>IC1</Text>,
      title: "Option 1",
      onPress: () => console.log("Option 1"),
    },
    {
      icon: <Text>IC2</Text>,
      title: "Option 2",
      onPress: () => console.log("Option 2"),
    },
  ]);

  const popupMenu2 = usePopupMenu([
    {
      icon: <Text>IC3</Text>,
      title: "Option 2 - 1",
      onPress: () => console.log("Option Menu 2 - 1"),
    },
    {
      icon: <Text>IC4</Text>,
      title: "Option 2 - 2",
      onPress: () => console.log("Option Menu 2 - 2"),
    },
  ]);

  return (
    <View>
      <Text>PopupMenu 1</Text>

      <Button onPress={() => popupMenu1.show()} title="Show Popup" />
      {popupMenu1.render()}

      <Text>PopupMenu 2</Text>

      <Button onPress={() => popupMenu2.show()} title="Show Popup 2" />
      {popupMenu2.render()}
    </View>
  );
}
