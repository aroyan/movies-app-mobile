import { View, Text } from "react-native";
import { useSearchParams } from "expo-router";

export default function TvDetail() {
  const { id } = useSearchParams();

  return (
    <View>
      <Text>TvDetail {id}</Text>
    </View>
  );
}
