import React from "react";
import { Container, Typography, Header } from "../Components/";
import { Button } from "react-native-elements";
const RayaScreen = ({ navigation, route }) => {
  return (
    <Container>
      <Header
        onBack={() => {
          navigation.goBack();
        }}
        backCaption="Back"
        color="red"
      />
      <Typography variant="h1" textAlign="center" style={{ marginTop: 20 }}>
        Raya SCREEN
      </Typography>

      <Button
        title="Navigate To Raya"
        onPress={() => {
          navigation.navigate("Home", { screen: "Tab2" });
        }}
      />
    </Container>
  );
};

export default RayaScreen;
