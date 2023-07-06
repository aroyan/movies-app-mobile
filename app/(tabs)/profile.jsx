import { View, Text, TouchableOpacity } from "react-native";

export default function Profile() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Profile</Text>

			<TouchableOpacity>
				<Text>Login</Text>
			</TouchableOpacity>

			<TouchableOpacity>
				<Text>Register</Text>
			</TouchableOpacity>
		</View>
	);
}
