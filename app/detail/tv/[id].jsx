import { Text } from "react-native";
import { useSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TvDetail() {
	const { id } = useSearchParams();

	return (
		<SafeAreaView>
			<Text>TvDetail {id}</Text>
		</SafeAreaView>
	);
}
