import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MovieNowPlaying, MoviePopular, TvTopRated, TvPopular } from "../../api/tmdb";
import BilibiliCardItem from "../../components/BilibiliCardItem";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const Separator = () => {
  return <View style={{ width: 8 }} />;
};

const EmptyMovie = () => (
  <View>
    <Text>Sorry, no items here</Text>
  </View>
);

function Home() {
  const [movieNowPlaying, setMovieNowPlaying] = useState(null);
  const [moviePopular, setMoviePopular] = useState(null);
  const [tvTopRated, setTvTopRated] = useState(null);
  const [tvPopular, setTvPopular] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const promises = [MovieNowPlaying(), MoviePopular(), TvTopRated(), TvPopular()];
      setLoading(true);

      try {
        const results = await Promise.all(promises);

        setMovieNowPlaying(results[0].data.results);
        setMoviePopular(results[1].data.results);
        setTvTopRated(results[2].data.results);
        setTvPopular(results[3].data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const renderMovieNowPlaying = ({ item }) => (
    <BilibiliCardItem
      key={item.id}
      posterUrl={`${BASE_IMAGE_URL}${item.poster_path}`}
      title={item.title ?? item.name}
      id={item.id}
      mediaType="movie"
    />
  );

  const renderMoviePopular = ({ item }) => (
    <BilibiliCardItem
      key={item.id}
      posterUrl={`${BASE_IMAGE_URL}${item.poster_path}`}
      title={item.title ?? item.name}
      id={item.id}
      mediaType="movie"
    />
  );

  const renderTvTopRated = ({ item }) => (
    <BilibiliCardItem
      key={item.id}
      posterUrl={`${BASE_IMAGE_URL}${item.poster_path}`}
      title={item.title ?? item.name}
      id={item.id}
      mediaType="tv"
    />
  );

  const renderTvPopular = ({ item }) => (
    <BilibiliCardItem
      key={item.id}
      posterUrl={`${BASE_IMAGE_URL}${item.poster_path}`}
      title={item.title ?? item.name}
      id={item.id}
      mediaType="tv"
    />
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Fetching the latest movies for you...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ paddingHorizontal: 8, paddingVertical: 4 }}>
      <Text style={styles.heading}>Now Playing Movies</Text>

      <FlatList
        data={movieNowPlaying}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={EmptyMovie}
        ItemSeparatorComponent={Separator}
        initialNumToRender={6}
        renderItem={renderMovieNowPlaying}
      />

      <Text style={styles.heading}>Popular Movies</Text>

      <FlatList
        data={moviePopular}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={EmptyMovie}
        ItemSeparatorComponent={Separator}
        initialNumToRender={6}
        renderItem={renderMoviePopular}
      />

      <Text style={styles.heading}>Top Rated TV</Text>

      <FlatList
        data={tvTopRated}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={EmptyMovie}
        ItemSeparatorComponent={Separator}
        initialNumToRender={6}
        renderItem={renderTvTopRated}
      />

      <Text style={styles.heading}>Popular Tv</Text>

      <FlatList
        data={tvPopular}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={EmptyMovie}
        ItemSeparatorComponent={Separator}
        initialNumToRender={6}
        renderItem={renderTvPopular}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Home;
