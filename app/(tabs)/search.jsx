import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Stack, useNavigation } from "expo-router";

import { Trending } from "../../api/Trending";
import Loading from "../../components/Loading";
import { CardItem } from "../../components/CardItem";
import BilibiliCardItem from "../../components/BilibiliCardItem";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const Separator = () => {
	return <View style={{ width: 8 }} />;
};

const EmptyMovie = () => (
	<View>
		<Text>Sorry, no movies</Text>
	</View>
);

function Search() {
	const [trending, setTrending] = useState(null);

	const navigation = useNavigation();

	useEffect(() => {
		Trending()
			.then(response => setTrending(response.data.results))
			.catch(error => console.error(error));
	}, []);

	useEffect(() => {
		navigation.setOptions({
			headerTitle: "Hellos",
			headerSearchBarOptions: {
				placeholder: "Search",
			},
		});
	}, [navigation]);

	if (!trending) {
		return <Loading />;
	}

	return (
		<ScrollView>
			<Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 4 }}>Trending this Week</Text>
			<FlatList
				style={{ height: 200 }}
				data={trending}
				keyExtractor={item => item.id}
				horizontal
				showsHorizontalScrollIndicator={false}
				ListEmptyComponent={EmptyMovie}
				ItemSeparatorComponent={Separator}
				renderItem={({ item }) => (
					<CardItem
						id={item.id}
						mediaType={item.media_type}
						posterUrl={`${BASE_IMAGE_URL}${item.poster_path}`}
						key={item.id}
					/>
				)}
			/>

			<View
				style={{
					height: 100,
				}}
			/>

			<FlatList
				data={trending}
				keyExtractor={item => item.id}
				horizontal
				showsHorizontalScrollIndicator={false}
				ListEmptyComponent={EmptyMovie}
				ItemSeparatorComponent={Separator}
				renderItem={({ item }) => (
					<BilibiliCardItem
						key={item.id}
						posterUrl={`${BASE_IMAGE_URL}${item.poster_path}`}
						title={item.title ?? item.name}
					/>
				)}
			/>
		</ScrollView>
	);
}

export default Search;
