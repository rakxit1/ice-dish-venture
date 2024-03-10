import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import NameBtn from "../components/NameBtn";
import { useDispatch } from "react-redux";
import { setOwner } from "../store/slices/userSlice";

const Owners = () => {
  const [owners, setOwners] = useState("");
  const dispatch = useDispatch();

  const onPressOwner = (owner: string) => {
    setOwners(owner);
  };

  const onPressGoAhead = () => {
    dispatch(setOwner(owners));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.qeustionText}>who is managing the collections?</Text>
      <NameBtn title="Manoj" onPress={onPressOwner} selectedOwner={owners} />
      <NameBtn title="Navneet" onPress={onPressOwner} selectedOwner={owners} />
      <NameBtn title="Raxit" onPress={onPressOwner} selectedOwner={owners} />
      <View style={styles.mb30} />
      <Button title={"GO AHEAD!"} disabled={!owners} onPress={onPressGoAhead} />
    </View>
  );
};

export default Owners;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  qeustionText: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 50,
    color: "gray",
  },
  mb30: { marginBottom: 30 },
});
