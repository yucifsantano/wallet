import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import SettingsGuest from "./SettingsGuest";
import SettingsUser from "./SettingsUser";

export default function SettingsScreen() {
  const [login, setLogin] = useState(null);

  /*
  useEffect(() => {
    setLogin(false);
  }, []);
  */

  //if (login=== null) return(<text>Cargando...</text>);

  return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f7f7",
  },
});
