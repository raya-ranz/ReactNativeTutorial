import React, { useEffect, useState } from "react";
import { Container, Typography, Header } from "../Components/";
import { Button } from "react-native-elements";
import { useIsDrawerOpen } from "@react-navigation/drawer";
const Tab1Screen = ({ navigation, route }) => {
  const [myData, setMyData] = useState("Test");
  useEffect(() => {
    if (route.params?.post) {
      setMyData("Data");
    }
  }, [route.params?.post]);

  return (
    <Container>
      <Typography variant="h1" textAlign="center" style={{ marginTop: 20 }}>
        {route.params?.post}
      </Typography>
      <Button
        title="Navigate To Editor"
        onPress={() => {
          //  navigation.navigate("Tab2");
          const isOpen = useIsDrawerOpen();
          if (isOpen) {
            navigation.closeDrawer();
          } else {
            navigation.openDrawer();
          }
        }}
      />
    </Container>
  );
};

export default Tab1Screen;
