import { StyleSheet, View, ActivityIndicator, Image } from "react-native";

export const PosterImage = ({ posterUrl }) => {
  const fallbackImage = "https://picsum.photos/400/300";

  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" />
      <Image
        style={styles.image}
        source={{ uri: posterUrl ?? fallbackImage }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    height: 200,
    width: 160,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 8,
    resizeMode: "cover",
    height: 200,
    width: 160,
  },
});
