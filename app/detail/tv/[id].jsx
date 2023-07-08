import { Dimensions, View, Text, ActivityIndicator, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { TvDetail as TvDetailApi } from "../../../api/tmdb";

const BASE_BACKDROP_URL = "https://image.tmdb.org/t/p/original";

export default function TvDetail() {
  const { id } = useSearchParams();

  const [detail, setDetail] = useState(null);

  const { width, height } = Dimensions.get("screen");

  const BACKDROP_IMAGE_URL = `${BASE_BACKDROP_URL}${detail?.backdrop_path}`;

  useEffect(() => {
    (async () => {
      TvDetailApi(id)
        .then(response => setDetail(response.data))
        .catch(error => console.error(error));
    })();
  }, []);

  if (!detail) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="blue" />
        <Text>Loading....</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Image
        source={{ uri: BACKDROP_IMAGE_URL }}
        style={[styles.backdropImage, { height: height / 4, width: width }]}
      />

      <View style={{ paddingHorizontal: 8 }}>
        <Text style={styles.title}>{detail.name ?? detail.title}</Text>

        <Text>{detail.vote_average}</Text>
        <Text>{detail.overview}</Text>
        <View style={styles.genreContainer}>
          {detail &&
            detail?.genres?.map(genre => (
              <Text key={genre.id} style={styles.badge}>
                {genre.name}
              </Text>
            ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backdropImage: {
    resizeMode: "cover",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
  badge: {
    backgroundColor: "whitesmoke",
    padding: 8,
    borderRadius: 8,
  },
  genreContainer: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
