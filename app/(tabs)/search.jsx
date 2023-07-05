import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { Trending } from "../../api/Trending";
import Loading from "../../components/Loading";
import { CardItem } from "../../components/CardItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function Search() {
	const [trending, setTrending] = useState(null);

	useEffect(() => {
		Trending()
			.then(response => setTrending(response.data.results))
			.catch(error => console.error(error));
	}, []);

	if (!trending) {
		return <Loading />;
	}

	return (
		<SafeAreaView>
			<ScrollView>
				<Text>Implement search later</Text>
				<FlatList
					style={{ height: 200 }}
					data={trending}
					keyExtractor={item => item.id}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<CardItem
							id={item.id}
							mediaType={item.media_type}
							posterUrl={`${BASE_IMAGE_URL}${item.poster_path}`}
							key={item.id}
						/>
					)}
				/>
				<Text>Implement search later</Text>
				<FlatList
					style={{ height: 200 }}
					data={trending}
					keyExtractor={item => item.id}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<CardItem
							id={item.id}
							mediaType={item.media_type}
							posterUrl={`${BASE_IMAGE_URL}${item.poster_path}`}
							key={item.id}
						/>
					)}
				/>
				<Text>Implement search later</Text>
				<FlatList
					style={{ height: 200 }}
					data={trending}
					keyExtractor={item => item.id}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<CardItem
							id={item.id}
							mediaType={item.media_type}
							posterUrl={`${BASE_IMAGE_URL}${item.poster_path}`}
							key={item.id}
						/>
					)}
				/>
				<Text>Implement search later</Text>
				<FlatList
					style={{ height: 200 }}
					data={trending}
					keyExtractor={item => item.id}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<CardItem
							id={item.id}
							mediaType={item.media_type}
							posterUrl={`${BASE_IMAGE_URL}${item.poster_path}`}
							key={item.id}
						/>
					)}
				/>
				<Text>Implement search later</Text>
				<FlatList
					style={{ height: 200 }}
					data={trending}
					keyExtractor={item => item.id}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<CardItem
							id={item.id}
							mediaType={item.media_type}
							posterUrl={`${BASE_IMAGE_URL}${item.poster_path}`}
							key={item.id}
						/>
					)}
				/>
				<Text>Implement search later</Text>
				<FlatList
					style={{ height: 200 }}
					data={trending}
					keyExtractor={item => item.id}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<CardItem
							id={item.id}
							mediaType={item.media_type}
							posterUrl={`${BASE_IMAGE_URL}${item.poster_path}`}
							key={item.id}
						/>
					)}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}

export default Search;
