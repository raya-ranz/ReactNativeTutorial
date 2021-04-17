import React, { useState } from "react";
import { Container, Typography, Header } from "../Components/";
import { Button } from "react-native-elements";
import { useIsDrawerOpen } from "@react-navigation/drawer";
const Editor = ({ navigation, route }) => {
  //   const { data } = route.params;
  const [postText, setPostText] = useState("");
  return (
    <Container>
      <Header
        // title={data}
        onBack={() => {
          navigation.popToTop();
        }}
        backCaption="Back"
        color="red"
      />
      <Typography variant="h1" textAlign="center" style={{ marginTop: 20 }}>
        Editor
      </Typography>
      <Button
        title="Change the Data"
        onPress={() => {
          alert("Clicked");
          //change yung data
          //   navigation.navigate({
          //     name: "Tab1",
          //     params: { post: "vvvv" },
          //     //merge: true,
          //   });
          // navigation.goBack();
          //   const isOpen = useIsDrawerOpen();
          //   if (isOpen) {
          //     navigation.closeDrawer();
          //   } else {
          //     navigation.openDrawer();
          //   }
          navigation.toggleDrawer();
        }}
      />
    </Container>
  );
};

export default Editor;
