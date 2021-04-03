import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ReactTraining from "./Source/";
import { rayaTraining1, rayaTraining2 } from "./Source/funcRequired";

export default function App() {
  const test1 = rayaTraining1();
  const test2 = rayaTraining2();
  return (
    <View style={styles.container}>
      <ReactTraining val={{ test1, test2 }} />
      <StatusBar style="auto" />
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
