import React from "react";
import { Button } from "react-native";
import { Container, Typography, Header } from "../Components/";

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Header
        title="Dashboard"
        onBack={() => {}}
        backCaption="Balik"
        color="red"
      />
      <Typography variant="h1" textAlign="center" style={{ marginTop: 20 }}>
        HOME SCREEN
      </Typography>

      <Button
        title="Go to Raya"
        onPress={() => {
          // navigation.navigate("Raya", {
          //     tabTitle: "Dashboard Raya",
          //   })
        }}
      />
    </Container>
  );
};

export default HomeScreen;
