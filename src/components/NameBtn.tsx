import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface NameBtnProps {
  title: string;
  onPress: (user: string) => void;
  selectedOwner: string;
}

const NameBtn = ({ title, onPress, selectedOwner }: NameBtnProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(title);
      }}
      style={[
        {
          backgroundColor: selectedOwner === title ? "#2188dd" : "gray",
        },
        styles.container,
      ]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NameBtn;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 30,
    marginVertical: 20,
  },
  title: { textAlign: "center", fontSize: 25, color: "white" },
});
