import React from "react";
import { View, Text, Button, Dimensions } from "react-native";

const LessonFlexbox = () => {
  const UIforWrap = () => {
    return (
      <View>
        <View style={{ backgroundColor: "red", width: 50, height: 80 }} />
        <View style={{ backgroundColor: "orangered", width: 50, height: 80 }} />
        <View style={{ backgroundColor: "orange", width: 50, height: 80 }} />
        <View
          style={{ backgroundColor: "mediumseagreen", width: 50, height: 80 }}
        />
        <View
          style={{ backgroundColor: "deepskyblue", width: 50, height: 80 }}
        />
        <View
          style={{ backgroundColor: "mediumturquoise", width: 50, height: 80 }}
        />
        <View
          style={{ backgroundColor: "mediumslateblue", width: 50, height: 80 }}
        />
        <View style={{ backgroundColor: "purple", width: 50, height: 80 }} />
        <View style={{ backgroundColor: "#000", width: 50, height: 80 }} />
        <View style={{ backgroundColor: "#fca311", width: 50, height: 80 }} />
        <View style={{ backgroundColor: "#b5838d", width: 50, height: 80 }} />
        <View style={{ backgroundColor: "#9bf6ff", width: 50, height: 80 }} />
      </View>
    );
  };

  const ReturnOtherView = () => {
    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        <View
          style={{
            backgroundColor: "mediumseagreen",
            width: 50,
            height: 80,
            flexBasis: 180,
            flexShrink: 2,
            flexGrow: 0,
          }}
        />
        <View
          style={{
            backgroundColor: "deepskyblue",
            width: 50,
            height: 80,
            flexBasis: 180,
            flexShrink: 1,
            flexGrow: 0,
          }}
        />
        <View
          style={{
            backgroundColor: "mediumturquoise",
            width: 50,
            height: 80,
            flexBasis: 180,
            flexShrink: 1,
            flexGrow: 1,
          }}
        />
      </View>
    );
  };

  const RenderWidthAndHeight = () => {
    return (
      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            backgroundColor: "#b5838d",
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        />
        <View style={{ width: "10%", height: "10%" }} />
        <View
          style={{ backgroundColor: "#9bf6ff", width: "45%", height: "45%" }}
        />
      </View>
    );
  };

  const RenderAbsoluteVSRelative = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          position: "absolute",

          bottom: 0,
          flex: 1,
          alignSelf: "center",
        }}
      >
        <View
          style={{ backgroundColor: "mediumturquoise", width: 50, height: 80 }}
        />
        <View
          style={{ backgroundColor: "mediumslateblue", width: 50, height: 80 }}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        marginTop: 50,
      }}
    >
      <RenderAbsoluteVSRelative />
    </View>
  );
};

export default LessonFlexbox;
