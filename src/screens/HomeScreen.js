import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Text } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Đây là trang chủ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  text: { fontSize: 24, fontWeight: "bold" },
});