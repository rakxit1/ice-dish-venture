import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabScreen from "../navigation/TabScreen";
import OwnerSelection from "../navigation/OwnerSelection";
import { useSelector } from "react-redux";
import { selectOwner } from "../store/slices/userSlice";

const MainScreen = () => {
  const owner = useSelector(selectOwner);
  const isOwnerLoggedIn = owner !== "";
  return (
    <NavigationContainer>
      {isOwnerLoggedIn ? <TabScreen /> : <OwnerSelection />}
    </NavigationContainer>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
