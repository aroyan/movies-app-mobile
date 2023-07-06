import { Tabs } from "expo-router";
import { Feather, Foundation, FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <Foundation name="home" size={24} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					tabBarIcon: ({ color }) => <FontAwesome name="search" size={24} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
				}}
			/>
		</Tabs>
	);
}
