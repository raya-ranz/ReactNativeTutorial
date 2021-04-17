import React from "react";
import { Container, Typography, Header } from "../Components/";
import { Button } from "react-native-elements";
const Tab3Screen = ({ navigation, route }) => {
  return (
    <Container>
      <Typography variant="h1" textAlign="center" style={{ marginTop: 20 }}>
        Tab3Screen
      </Typography>
      <Button
        title="Navigate To Raya"
        onPress={() => {
          navigation.navigate("Raya", { data: "test data" });
        }}
      />
    </Container>
  );
};

export default Tab3Screen;
