import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ReactTraining from "./Source/";
import { rayaTraining1, rayaTraining2 } from "./Source/funcRequired";
import LessonFlexbox from "./Source/LessonFlexbox";
import LessonHook from "./Source/LessonHooks";
import { RayaProvider } from "./Source/Providers/RayaProvider";
import { Container, Typography } from "./Source/Components";
import Route from "./Source/routes/";

export default function App() {
  const test1 = rayaTraining1();
  const test2 = rayaTraining2();
  return (
    <Container>
      <RayaProvider>
        <Route />
      </RayaProvider>
      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
