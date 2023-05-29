import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import Header from "../components/Header";
import useUser from "../states/useUser";
import FavoritesList from "../components/FavoritesList";
import PersistentState from "../components/PersistentState";

export default function Home() {
  const { user } = useUser();

  return (
    <>
      <StatusBar style="auto" />
      <Header />
      <Text>Home for User: {user?.name}</Text>
      <Text>Age: {user?.age}</Text>
      <FavoritesList />
      <PersistentState />
    </>
  );
}
