import { View, StyleSheet } from "react-native";

export default function BilibiliSkeletonLoading() {
  return (
    <View style={styles.container}>
      <View style={styles.image} />
      <View style={styles.separator} />
      <View style={styles.title} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    flexWrap: "wrap",
    height: 36,
    backgroundColor: "gray",
  },
  separator: {
    height: 8,
  },
  image: {
    width: 110,
    height: 148,
    backgroundColor: "gray",
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    width: 110,
  },
});
