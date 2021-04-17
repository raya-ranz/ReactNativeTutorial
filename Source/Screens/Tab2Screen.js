import React, { useEffect } from "react";
import { Container, Typography, Header } from "../Components/";
import { Button } from "react-native-elements";
const Tab2Screen = ({ navigation, route }) => {
  useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params?.post]);
  return (
    <Container>
      <Typography variant="h1" textAlign="center" style={{ marginTop: 20 }}>
        {route.params?.post}
      </Typography>
      <Button
        title="Navigate To Settings"
        onPress={() => {
          navigation.navigate("Tab1", {
            name: "Tab1",
            params: { post: "HHHH" },
            merge: true,
          });

          //   navigation.navigate({
          //     name: "Tab1",
          //     params: { post: "vvvv" },
          //     //merge: true,
          //   });
        }}
      />
    </Container>
  );
};

export default Tab2Screen;
