import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { GolaDataType } from "../screens/GolaData";

interface ModalComponentProps {
  selectedItems: GolaDataType[];
  isModalVisible: boolean;
  onPressCloseModal: () => void;
  onPressProceed: (text: string) => void;
  text: string;
  onChangeText: (text: string) => void;
}

const ModalComponent = ({
  selectedItems,
  isModalVisible,
  onPressCloseModal,
  onPressProceed,
  text,
  onChangeText,
}: ModalComponentProps) => {
  const totalQty = selectedItems
    .flatMap((dataItem) => dataItem.options)
    .reduce((total, option) => total + option.qty, 0);

  const totalPrice = selectedItems
    .flatMap((dataItem) => dataItem.options)
    .reduce((total, option) => total + option.qty * option.price, 0);

  return (
    <Modal
      visible={isModalVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onPressCloseModal}>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={1}
        onPressOut={onPressCloseModal}>
        <TouchableWithoutFeedback>
          <View style={styles.modal}>
            <View style={styles.centerView}>
              <View style={styles.rowHeader}>
                <Text style={styles.qtyHeaderTitle}>Qty</Text>
                <Text style={styles.itemNameTitle}>item</Text>
                <Text style={styles.itmeTypeTitle}>Type</Text>
                <Text style={styles.itemPriceTitle}>price</Text>
              </View>
              <View style={styles.upperLine} />
              {selectedItems.map((item, index) => {
                return (
                  <View style={styles.completeWidth} key={index.toString()}>
                    {item.options
                      .filter((value) => value.qty !== 0)
                      .map((option, index) => {
                        return (
                          <View key={`${index}`} style={styles.descriptionRow}>
                            <Text style={styles.qtyHeader}>{option.qty}</Text>
                            <Text style={styles.itemName}>{item.item}</Text>
                            <Text style={styles.itmeType}>{option.name}</Text>
                            <Text style={styles.itemPrice}>
                              {option.price} * {option.qty} =
                              {option.price * option.qty}
                            </Text>
                          </View>
                        );
                      })}
                  </View>
                );
              })}
              <View style={styles.bottomLine} />
              <View style={styles.concludeText}>
                <Text style={styles.qtyHeaderTitle}>{totalQty}</Text>
                <Text style={styles.itemName}>-</Text>
                <Text style={styles.itmeType}>-</Text>
                <Text style={styles.itemPriceTitle}>{totalPrice}</Text>
              </View>
            </View>
            <TextInput
              blurOnSubmit
              style={styles.inputTextInput}
              multiline
              placeholder="Enter the token or name here"
              onChangeText={onChangeText}
              defaultValue={text}
              onSubmitEditing={() => {
                text !== "" && onPressProceed(text);
              }}
            />
            <Button
              title="Proceed!!"
              disabled={text === ""}
              onPress={() => {
                text !== "" && onPressProceed(text);
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.55)",
  },
  concludeText: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginVertical: 5,
  },
  modal: {
    backgroundColor: "white",
    paddingVertical: 20,
    width: "95%",
    alignContent: "center",
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 100,
  },
  qtyHeaderTitle: {
    flex: 0.4,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  itemNameTitle: {
    flex: 1.6,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  itmeTypeTitle: {
    flex: 0.6,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  itemPriceTitle: {
    flex: 1.5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  descriptionRow: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginVertical: 5,
  },
  bottomLine: {
    height: 1,
    width: "100%",
    marginTop: 10,
    backgroundColor: "gray",
  },
  qtyHeader: { flex: 0.4, textAlign: "center" },
  itemName: { flex: 1.6, textAlign: "center" },
  itmeType: { flex: 0.5, textAlign: "center" },
  itemPrice: { flex: 1.5, textAlign: "center" },
  inputTextInput: {
    marginBottom: 20,
    fontSize: 20,
    borderRadius: 4,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "white",
    color: "#2188dd",
  },
  centerView: { alignItems: "center" },
  rowHeader: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginBottom: 10,
  },
  upperLine: {
    height: 1,
    backgroundColor: "gray",
    width: "100%",
    marginBottom: 5,
  },
  completeWidth: { width: "100%" },
});
