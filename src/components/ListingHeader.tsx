import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectOwner, setResetUser } from "../store/slices/userSlice";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { GolaDataType } from "../screens/GolaData";

interface ListingHeaderProps {
  golaData: GolaDataType[];
  onPressCart: () => void;
}

const ListingHeader = ({ golaData, onPressCart }: ListingHeaderProps) => {
  const owner = useSelector(selectOwner);

  const dispatch = useDispatch();

  const onPressLogout = () => {
    dispatch(setResetUser());
  };

  const totalQty = golaData
    .flatMap((dataItem) => dataItem.options)
    .reduce((total, option) => total + option.qty, 0);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logout}>
        <Ionicons
          name="log-out-outline"
          color={"white"}
          size={30}
          onPress={onPressLogout}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cart}
        onPress={onPressCart}
        disabled={totalQty === 0}>
        {totalQty !== 0 && (
          <View style={styles.totalQtyStyle}>
            <Text>{totalQty}</Text>
          </View>
        )}
        <Ionicons name="cart-outline" color={"white"} size={30} />
      </TouchableOpacity>
      <Text style={styles.headerText}> Hello there {owner}! 👋</Text>
    </View>
  );
};

export default ListingHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2188dd",
    alignItems: "center",
    paddingVertical: 20,
    justifyContent: "center",
  },
  logout: { position: "absolute", left: 20 },
  cart: { position: "absolute", right: 20 },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  totalQtyStyle: {
    position: "absolute",
    backgroundColor: "white",
    top: -10,
    right: -5,
    paddingHorizontal: 7,
    borderRadius: 20,
  },
});
