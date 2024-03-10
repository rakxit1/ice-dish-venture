import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ListingHeader from "../components/ListingHeader";
import { GolaDataType, OwnerDataType } from "./GolaData";
import GolaListItem from "./GolaList.item";
import { db, dbRef } from "../../firebaseConfig";
import { ref, set, get, child } from "firebase/database";
import ModalComponent from "../components/ModalComponent";
import { useSelector } from "react-redux";
import { selectOwner } from "../store/slices/userSlice";

const GolaListing = () => {
  const [golaData, setGolaData] = useState<GolaDataType[]>([]);
  const [masterData, setMasterData] = useState<GolaDataType[]>([]);
  const [text, setText] = useState<string>("");
  const onChangeText = (val: string) => {
    setText(val);
  };
  const owner = useSelector(selectOwner);
  useEffect(() => {
    get(child(dbRef, `GolaList`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setGolaData(Object.values(snapshot.val()));
          setMasterData(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const selectedItems = golaData.filter((dataItem) =>
    dataItem.options.some((option) => option.qty > 0)
  );

  const onPressProceed = (text: string) => {
    const date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    const finalDate = date.replace(/\//g, "-");

    const updatedData = JSON.parse(JSON.stringify(selectedItems)).map(
      (item) => ({
        ...item,
        options: item.options.filter((option) => option.qty > 0),
      })
    );

    const orderTakerData: OwnerDataType = {
      id: "extraData",
      orderTaker: owner,
      time: finalDate,
      token: text,
    };

    const finalData = [...updatedData, orderTakerData];

    set(ref(db, `Orders/Pending/${finalDate}`), finalData);
    setIsModalVisible(false);
    setGolaData(masterData);
    setText("");
  };

  const onPressCart = () => {
    setIsModalVisible(true);
  };

  const onPressModalClose = () => {
    setIsModalVisible(false);
  };

  const onPressIcon = (
    itemId: number,
    subItem: string,
    type: "plus" | "minus"
  ) => {
    const updatedData = golaData.map((dataItem) => {
      if (dataItem.id === itemId) {
        const updatedOptions = dataItem.options.map((option) => {
          if (option.name === subItem) {
            let newQty;
            if (type === "plus") {
              newQty = option.qty + 1;
            } else {
              newQty = Math.max(option.qty - 1, 0); // Ensure qty doesn't go below zero
            }
            return { ...option, qty: newQty };
          }
          return option;
        });
        return { ...dataItem, options: updatedOptions };
      }
      return dataItem;
    });
    setGolaData(updatedData);
  };

  const renderItem = ({ item }: { item: GolaDataType }) => {
    return <GolaListItem item={item} onPressIcon={onPressIcon} />;
  };

  const ItemSeparatorComponent = () => {
    return <View style={styles.separator} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <ListingHeader golaData={golaData} onPressCart={onPressCart} />
      <FlatList
        contentContainerStyle={styles.subContainer}
        data={golaData}
        keyExtractor={(_, index) => {
          return `${index}`;
        }}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
      />
      <ModalComponent
        onChangeText={onChangeText}
        text={text}
        selectedItems={selectedItems}
        isModalVisible={isModalVisible}
        onPressCloseModal={onPressModalClose}
        onPressProceed={onPressProceed}
      />
    </SafeAreaView>
  );
};

export default GolaListing;

const styles = StyleSheet.create({
  separator: { height: 25 },
  container: { flex: 1, backgroundColor: "#ffffff" },
  subContainer: {
    marginTop: 20,
    flexGrow: 1,
    paddingBottom: 50,
  },
});
