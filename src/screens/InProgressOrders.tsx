import {
  Button,
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { child, get, ref, remove, set } from "firebase/database";
import { db, dbRef } from "../../firebaseConfig";
import PendingOrdersHeader from "../components/PendingOrdersHeader";
import { GolaDataType, OwnerDataType } from "./GolaData";
import { Ionicons } from "@expo/vector-icons";

type itemType = GolaDataType & OwnerDataType;

const InProgressOrders = () => {
  const [ordersData, setOrdersData] = useState<GolaDataType[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const getInitData = () => {
    setRefreshing(true);
    get(child(dbRef, `Orders/Pending`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setOrdersData(Object.values(snapshot.val()));
        } else {
          setOrdersData([]);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setRefreshing(false);
      });
  };

  const onRefresh = useCallback(() => {
    getInitData();
  }, []);

  useEffect(() => {
    getInitData();
  }, []);

  const onPressCompleteOrder = useCallback((id, finalData) => {
    const date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    const finalDate = date.replace(/\//g, "-");

    remove(child(dbRef, `/Orders/Pending/${id}`));
    set(ref(db, `Orders/Completed/${finalDate}`), finalData);
    onRefresh();
  }, []);

  const renderItem = ({ item }: { item: GolaDataType[] }) => {
    const extraData: OwnerDataType = item.find(
      (item) => item.id.toString() === "extraData"
    );

    const filteredData = item.filter(
      (item) => item.id.toString() !== "extraData"
    );

    const timeMatch = extraData.time.match(/(\d+:\d+:\d+)/);
    const formattedTime = timeMatch ? timeMatch[0] : null;
    return (
      <View style={styles.itemContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.rowView}>
            <Ionicons name="person" color={"#2188dd"} size={20} />
            <Text style={styles.orderTaker}>{extraData.orderTaker}</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.boldText}>Token:</Text>
            <Text style={styles.tokenBg}>{extraData.token}</Text>
          </View>
          <Text style={[styles.timeView, styles.boldText]}>
            {formattedTime}
          </Text>
        </View>
        <View style={styles.rowHeader}>
          <Text style={styles.itemNameTitle}>item</Text>
          <Text style={styles.itemNameTitle}>Type</Text>
          <Text style={styles.itemNameTitle}>Qty</Text>
        </View>
        <View style={styles.upperLine} />
        {filteredData.map((e: itemType) => {
          return (
            <View key={e.id}>
              {e.options.map((option, index) => {
                return (
                  <View key={`${index}`} style={styles.descriptionRow}>
                    <Text style={styles.itmeType}>{e.item}</Text>
                    <Text style={styles.itmeType}>{option.name}</Text>
                    <Text style={styles.itmeType}>{option.qty}</Text>
                  </View>
                );
              })}
            </View>
          );
        })}
        <View style={styles.lowerLine} />
        <Button
          title="Order Completed"
          onPress={() => onPressCompleteOrder(extraData.time, item)}
        />
      </View>
    );
  };

  const ListEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="sad-outline" size={50} color={"gray"} />
        <Text style={styles.emptyText}>There are no orders currently!!!</Text>
      </View>
    );
  };

  const ItemSeparatorComponent = () => {
    return <View style={styles.emptyView} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <PendingOrdersHeader ordersData={ordersData} />
      <FlatList
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainerStyle}
        data={ordersData}
        extraData={ordersData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => {
          return index.toString();
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListEmptyComponent={ListEmptyComponent}
      />
    </SafeAreaView>
  );
};

export default InProgressOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  boldText: { fontWeight: "bold", fontSize: 14 },
  timeView: { flex: 1, textAlign: "right", marginLeft: 5 },
  tokenBg: {
    backgroundColor: "#2188dd",
    paddingHorizontal: 10,
    borderRadius: 20,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  lowerLine: {
    height: 1,
    backgroundColor: "gray",
    width: "100%",
    marginBottom: 10,
    marginTop: 5,
  },
  orderTaker: { paddingLeft: 7, fontWeight: "bold", fontSize: 14 },
  rowView: { flexDirection: "row", alignItems: "center", flex: 1 },
  itemContainer: {
    paddingHorizontal: 5,
    backgroundColor: "#f2f2f2",
    paddingVertical: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  descriptionRow: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginVertical: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
    flex: 1,
    alignItems: "center",
  },
  emptyView: {
    height: 20,
  },
  flatlist: { flex: 1 },
  itmeType: { flex: 1, textAlign: "center", fontWeight: "400", fontSize: 18 },
  contentContainerStyle: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  emptyText: {
    color: "gray",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  itemNameTitle: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
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
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
