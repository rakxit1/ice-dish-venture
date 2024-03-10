import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Owners from "../screens/Owners";

const Stack = createNativeStackNavigator();

const OwnerSelection = () => {
  return (
    <Stack.Navigator
      initialRouteName="OWNER"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OWNER" component={Owners} />
    </Stack.Navigator>
  );
};

export default OwnerSelection;
