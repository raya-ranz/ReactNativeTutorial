import React from "react";
import { View, StyleSheet } from "react-native";

const Container = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
  },
});
