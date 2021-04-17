import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Screens/HomeScreen";
import RayaScreen from "../Screens/RayaScreen";
import Editor from "../Screens/Editor";
import Settings from "../Screens/Settings";
import Tab1Screen from "../Screens/Tab1Screen";
import Tab2Screen from "../Screens/Tab2Screen";
import Tab3Screen from "../Screens/Tab3Screen";

import { View } from "react-native";
import { Typography } from "../Components";

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const DrawerTab = createDrawerNavigator();

const MyTopTabs = () => {
  return (
    <TopTab.Navigator style={{ marginTop: 50 }}>
      <TopTab.Screen name="Tab111" component={Tab1Screen} />
      <TopTab.Screen name="Tab222" component={Tab2Screen} />
      <TopTab.Screen name="Tab333" component={Tab3Screen} />
    </TopTab.Navigator>
  );
};

const MyBottomTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Tab1" component={Tab1Screen} />
      <BottomTab.Screen name="Tab2" component={Tab2Screen} />
      <BottomTab.Screen name="Tab3" component={Tab3Screen} />
    </BottomTab.Navigator>
  );
};
const MyDrawer = () => {
  return (
    <DrawerTab.Navigator>
      <DrawerTab.Screen name="Editor" component={Editor} />
      <DrawerTab.Screen name="Settings" component={Settings} />
      <DrawerTab.Screen name="Raya" component={RayaScreen} />
    </DrawerTab.Navigator>
  );
};

//navigation.navigate('Home',{screen:'Tab1'})
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ header: () => null }}
      >
        <Stack.Screen name="Home" component={MyDrawer} />
        <Stack.Screen name="HomeDash" component={MyTopTabs} />
        <Stack.Screen name="HomeDashDrawer" component={MyBottomTabs} />
        <Stack.Screen name="Settings" component={Settings} />

        <Stack.Screen name="Editor" component={Editor} />
        <Stack.Screen name="Raya">
          {(props) => {
            const { navigation, route } = props;
            return <RayaScreen route={route} navigation={navigation} />;
          }}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
