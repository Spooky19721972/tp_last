import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AppBar({ title = "", back = false }) {
  const navigation = useNavigation();
  return (
    <View style={styles.appBar}>
      {back ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
      ) : null}
      <Text style={styles.title}>{title || "Mon Application"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 60,
    backgroundColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    elevation: 4,
  },
  backButton: {
    marginRight: 12,
    padding: 8,
  },
  backText: {
    color: "#fff",
    fontSize: 18,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
