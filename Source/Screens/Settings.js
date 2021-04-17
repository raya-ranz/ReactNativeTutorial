import React from "react";
import { Container, Typography, Header } from "../Components/";

const Settings = ({ navigation, route }) => {
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
        Settings
      </Typography>
    </Container>
  );
};

export default Settings;
