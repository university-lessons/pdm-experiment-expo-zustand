import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button } from "react-native";
import useUser from "../states/useUser";

export default function Login() {
  const { setUser } = useUser();

  return (
    <>
      <Button
        onPress={() => setUser({ name: "Fulano", age: 25 })}
        title="Login"
      />
      <StatusBar style="auto" />
    </>
  );
}
