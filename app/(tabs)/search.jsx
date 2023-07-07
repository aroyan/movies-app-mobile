import { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Stack } from "expo-router";

import { MovieNowPlaying, MovieUpcoming, TvOnTheAir, TvPopular } from "../../api/tmdb";
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

function Search() {
  const [movieNowPlaying, setMovieNowPlaying] = useState(null);
  const [movieUpcoming, setMovieUpcoming] = useState(null);
  const [tvOnTheAir, setTvOnTheAir] = useState(null);
  const [tvPopular, setTvPopular] = useState(null);
  const [loading, setLoading] = useState(false);

  const { width } = Dimensions.get("screen");

  useEffect(() => {
    (async () => {
      const promises = [MovieNowPlaying(), MovieUpcoming(), TvOnTheAir(), TvPopular()];
      setLoading(true);

      try {
        const results = await Promise.all(promises);

        setMovieNowPlaying(results[0].data.results);
        setMovieUpcoming(results[1].data.results);
        setTvOnTheAir(results[2].data.results);
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

  const renderMovieUpcoming = ({ item }) => (
    <BilibiliCardItem
      key={item.id}
      posterUrl={`${BASE_IMAGE_URL}${item.poster_path}`}
      title={item.title ?? item.name}
      id={item.id}
      mediaType="movie"
    />
  );

  const renderTvOnTheAir = ({ item }) => (
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
        <Text>Fetching the latest movies for you...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ paddingHorizontal: 8, paddingVertical: 4 }}>
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitle: () => (
            <View>
              <TextInput
                placeholder="Search"
                style={{
                  borderWidth: 1,
                  borderRadius: 8,
                  height: 40,
                  width: width - 100,
                  padding: 8,
                }}
              />
            </View>
          ),
        }}
      />

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

      <Text style={styles.heading}>Upcoming Movies</Text>

      <FlatList
        data={movieUpcoming}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={EmptyMovie}
        ItemSeparatorComponent={Separator}
        initialNumToRender={6}
        renderItem={renderMovieUpcoming}
      />

      <Text style={styles.heading}>On The Air TV</Text>

      <FlatList
        data={tvOnTheAir}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={EmptyMovie}
        ItemSeparatorComponent={Separator}
        initialNumToRender={6}
        renderItem={renderTvOnTheAir}
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

export default Search;
