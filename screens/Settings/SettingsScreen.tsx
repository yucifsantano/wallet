import React from "react";
import { View, Text, StyleSheet } from "react-native";

import SettingsGuest from "./SettingsGuest";
import SettingsUser from "./SettingsUser";

export default function SettingsScreen() {
  const userLogg = false;

  return userLogg ? <SettingsUser/> : <SettingsGuest/>;
}
