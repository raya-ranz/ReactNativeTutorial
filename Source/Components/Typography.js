import React from "react";
import { Text, StyleSheet } from "react-native";

const Typography = (props) => {
  const { style, ...rest } = props;
  const variants = {
    p: 16,
    h1: 30,
    h2: 20,
    h3: 18,
  };

  return (
    <Text
      style={{
        ...styles.text,
        fontSize: variants[props.variants],
        fontWeight: props.variants === "p" ? props.weight : "bold",
        color: props.color,
        textAlign: props.textAlign,
        ...style,
      }}
      {...rest}
    >
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#000",
    paddingBottom: 5,
  },
});

export default Typography;
