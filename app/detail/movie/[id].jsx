import { View, Text } from "react-native";
import { useSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MovieDetail() {
	const { id } = useSearchParams();

	return (
		<SafeAreaView>
			<Text>MovieDetail {id}</Text>
		</SafeAreaView>
	);
}
