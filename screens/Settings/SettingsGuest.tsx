import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SettingsGuest() {
    return (
        <View style={styles.container}>
          <Text>Settings Guest</Text>
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
