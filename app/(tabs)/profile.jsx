import { StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function LoginScreen() {
  return (
    <View
      style={{
        height: "100%",
        paddingHorizontal: 24,
      }}
    >
      <View style={{ height: 32 }} />

      <Text>Login</Text>

      <View style={{ height: 24 }} />

      <Text>Login to enjoy fully featured app</Text>

      <View style={{ height: 20 }} />

      <TextInput
        autoComplete="email"
        blurOnSubmit
        placeholder="Email address"
        style={styles.input}
      />

      <View style={{ height: 24 }} />

      <TextInput
        autoComplete="password"
        blurOnSubmit
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />

      <View style={{ height: 16 }} />

      <TouchableOpacity>
        <Text>Forgot password?</Text>
      </TouchableOpacity>

      <View style={{ height: 16 }} />

      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text style={{ color: "#021038", fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity>

      <View style={{ height: 16 }} />

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: "whitesmoke",
            flexDirection: "row",
            borderColor: "#687087",
            borderWidth: 1,
          },
        ]}
      >
        <AntDesign name="google" size={24} color="black" />
        <View style={{ width: 8 }} />

        <Text style={{ color: "black", fontWeight: "400" }}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6F92F0",
    borderRadius: 12,
    height: 46,
  },
  buttonImage: {
    flexDirection: "row",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    height: 46,
  },
  container: {
    backgroundColor: "#000C26",
    height: "100%",
    paddingHorizontal: 30,
  },
  input: {
    borderColor: "silver",
    borderWidth: 1,
    padding: 8,
    color: "white",
    borderRadius: 8,
  },
});
