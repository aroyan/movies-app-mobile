import { Link } from "expo-router";
import { Image, View, Text, StyleSheet } from "react-native";

/**
 *
 * @param {{posterUrl: string, title: string, mediaType: string, id: string}} props
 */
export default function BilibiliCardItem({ posterUrl, title: _title, mediaType, id }) {
  const imageSource = posterUrl ?? "http://placekitten.com/110/148";

  let title = _title;

  if (title) {
    if (title.length >= 27) {
      title = _title.substring(0, 34) + " ...";
    }
  }

  return (
    <Link href={`/detail/${mediaType}/${id}`}>
      <View style={styles.container}>
        <Image source={{ uri: imageSource }} style={styles.image} />

        <View style={styles.separator} />

        <Text style={styles.title}>{title}</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    flexWrap: "wrap",
    height: 36,
    fontWeight: "500",
    fontSize: 12,
  },
  separator: {
    height: 8,
  },
  image: {
    width: 110,
    height: 148,
    resizeMode: "cover",
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    width: 110,
  },
});
