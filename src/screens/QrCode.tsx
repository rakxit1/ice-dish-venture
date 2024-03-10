import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const QrCode = (props: Props) => {
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

export default QrCode;

const styles = StyleSheet.create({});
