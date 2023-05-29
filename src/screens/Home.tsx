import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import Header from "../components/Header";
import useUser from "../states/useUser";

export default function Home() {
  const { user } = useUser();

  return (
    <>
      <Header />
      <Text>Home for User: {user?.name}</Text>
      <Text>Age: {user?.age}</Text>
      <StatusBar style="auto" />
    </>
  );
}
