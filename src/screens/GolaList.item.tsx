import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { GolaDataType } from "./GolaData";

interface GolaListItem {
  item: GolaDataType;
  onPressIcon: (
    itemId: number,
    subItem: string,
    type: "plus" | "minus"
  ) => void;
}

const GolaListItem = ({ item, onPressIcon }: GolaListItem) => {
  const [shown, setShown] = useState(false);

  const onPressItem = () => {
    setShown(!shown);
  };

  return (
    <View style={styles.listItemContainer}>
      <TouchableOpacity onPress={onPressItem} style={styles.listSubContainer}>
        <Text style={styles.itemText}>{item.item}</Text>
        <Ionicons name={shown ? "chevron-up" : "chevron-down"} size={20} />
      </TouchableOpacity>
      {shown && (
        <ScrollView horizontal style={styles.mv20}>
          {item.options.map((optionItem) => {
            return (
              <View key={optionItem.name} style={styles.itemName}>
                <Text style={styles.priceItem}>
                  {optionItem.name} ₹{optionItem.price}
                </Text>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity
                    disabled={optionItem.qty === 0}
                    onPress={() =>
                      onPressIcon(item.id, optionItem.name, "minus")
                    }>
                    <Ionicons
                      name="remove-circle-outline"
                      color={"white"}
                      size={40}
                    />
                  </TouchableOpacity>
                  <Text style={styles.qtyText}>{optionItem.qty}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      onPressIcon(item.id, optionItem.name, "plus")
                    }>
                    <Ionicons
                      name="add-circle-outline"
                      color={"white"}
                      size={40}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default GolaListItem;

const styles = StyleSheet.create({
  listItemContainer: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  itemText: { fontWeight: "bold", fontSize: 18 },
  qtyText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  listSubContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  mv20: { marginVertical: 20 },
  itemName: {
    backgroundColor: "#2188dd",
    paddingVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 30,
    marginHorizontal: 10,
  },
  priceItem: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
  },
});
