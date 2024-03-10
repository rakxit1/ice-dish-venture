import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GolaListing from "../screens/GolaListing";
import QrCode from "../screens/QrCode";
import History from "../screens/History";
import Ionicons from "@expo/vector-icons/Ionicons";
import InProgressOrders from "../screens/InProgressOrders";

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="LISTING"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          shadowColor: "gray",
          shadowOpacity: 0.25,
          height: 50,
        },
      }}>
      <Tab.Screen
        name="LISTING"
        options={{
          tabBarLabel: "List",
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
        component={GolaListing}
      />
      <Tab.Screen
        name="PEDNING"
        options={{
          tabBarLabel: "Orders",
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-sharp" color={color} size={size} />
          ),
        }}
        component={InProgressOrders}
      />
      <Tab.Screen
        name="QRCODE"
        options={{
          tabBarLabel: "QR Code",
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="qr-code-sharp" color={color} size={size} />
          ),
        }}
        component={QrCode}
      />
      <Tab.Screen
        name="HISTORY"
        options={{
          tabBarLabel: "History",
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt" color={color} size={size} />
          ),
        }}
        component={History}
      />
    </Tab.Navigator>
  );
};

export default TabScreen;

const styles = StyleSheet.create({});
