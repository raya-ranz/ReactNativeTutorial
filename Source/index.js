import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Linking,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
const ReactTraining = (props) => {
  const [checkPermission, setPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [refresh, setRefresh] = useState(Math.random());

  const requestPerm = async () => {
    const cameraStatus = await BarCodeScanner.requestPermissionsAsync();
    setPermission(cameraStatus);
  };

  const runCameraScanner = () => {
    const { status } = checkPermission;
    const checkIfPermission = status === "granted";

    if (checkIfPermission) {
      setShowCamera(true);
    }
    setRefresh(Math.random());
  };

  const handleScann = (type, data) => {
    setScanned(true);
    setScannedData(`Code type: ${type} || code data: ${data}`);
  };
  //display
  return (
    <View style={{ marginTop: 100 }}>
      <View
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height - 400,
        }}
      >
        {showCamera && (
          <BarCodeScanner
            onBarCodeScanned={
              scanned ? undefined : ({ type, data }) => handleScann(type, data)
            }
            style={{
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height - 400,
            }}
          />
        )}
      </View>

      <Button title="Request Permission" onPress={() => requestPerm()} />
      <Button title="Launch Camera" onPress={() => runCameraScanner()} />

      {showCamera && (
        <Button title="Scan again" onPress={() => setScanned(false)} />
      )}

      <ScrollView>
        <View>
          <Text style={{ textAlign: "center" }}>Result</Text>
          <Text>{scannedData}</Text>
          {typeof scannedData === "object" && (
            <Text>{`${JSON.stringify(scannedData, null, 2)}\n`}</Text>
          )}
          {scannedData.startsWith("https:") && (
            <Button
              title="Click me"
              onPress={() => Linking.openURL(scannedData)}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ReactTraining;
