import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const History = (props: Props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{ color: "#2188dd", fontWeight: "bold", fontSize: 30 }}>
        Upcoming!
      </Text>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({});
