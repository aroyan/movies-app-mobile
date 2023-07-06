import { Stack } from "expo-router";

export default function AppRoot() {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" />
		</Stack>
	);
}
