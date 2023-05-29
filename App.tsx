import { StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import useUser from "./src/states/useUser";

export default function App() {
  const { user } = useUser();

  if (!user)
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );

  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
