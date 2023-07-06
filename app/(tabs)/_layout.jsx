import { Tabs } from "expo-router";
import { Feather, Foundation, FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="home"
				options={{
					tabBarIcon: () => <Foundation name="home" size={24} color="black" />,
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					tabBarIcon: () => <FontAwesome name="search" size={24} color="black" />,
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarIcon: () => <Feather name="user" size={24} color="black" />,
				}}
			/>
		</Tabs>
	);
}
