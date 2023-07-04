import { View, Text } from "react-native";
import { useSearchParams } from "expo-router";

export default function MovieDetail() {
  const { id } = useSearchParams();

  return (
    <View>
      <Text>MovieDetail {id}</Text>
    </View>
  );
}
