import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  useContext,
} from "react";
import { View, Button, Text, StyleSheet, TextInput } from "react-native";
import { useRaya, RayaContext } from "./Providers/RayaProvider/";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  textStyle: {
    fontSize: 20,
    textAlign: "center",
  },
});

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("invalid data");
  }
}

const LessonHook = () => {
  const initialValue = { count: 0 };
  const rayaData = useContext(RayaContext);
  const { createRaya, setRayaState, rayaState } = rayaData;
  const ref1 = useRef();
  const [val1, setVal1] = useState(1);
  const [val2, setVal2] = useState(0);
  const [textValue, setTextValue] = useState("");
  const [myVal, setMyVal] = useState("");
  const [state, dispatch] = useReducer(reducer, initialValue);

  const test1 = useKamote("Raya");
  console.log({ test1 });

  useEffect(() => {
    //ref1.current.focus();
    setVal1(val1 + 1);
    () => {
      setVal1(1);
      testListener.removeListenter();
      tesRef = null;
    };
  }, [val2]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, textAlign: "center" }}>{`${myVal}`}</Text>
      <Text
        style={{ fontSize: 20, textAlign: "center" }}
      >{`${rayaState}`}</Text>
      {/* <Button
        title="Increment"
        onPress={() => {
          dispatch({ type: "increment" });
        }}
      />
      <Button
        title="Decr"
        onPress={() => {
          dispatch({ type: "decrement" });
        }}
      /> */}

      <Button
        title="use hooks"
        onPress={() => {
          setRayaState("Hello React Native");
        }}
      />

      <Button
        title="use Raya"
        onPress={() => {
          const newDt = createRaya("!!!!");
          setMyVal(newDt);
        }}
      />

      {/* <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          padding: 20,
        }}
      >
        <TextInput
          ref={ref1}
          placeholder="I will change"
          placeholderTextColor="#000"
          style={{ color: "#000", height: 100 }}
          editable
        />
      </View> */}
    </View>
  );
};

function useKamote(props) {
  const [state, setState] = useState("Hello");
  const [finalState, setFinalState] = useState(1);

  useEffect(() => {
    setState(`${state} ${props} ${finalState}`);
  }, [props]);

  return state;
}

export default LessonHook;
