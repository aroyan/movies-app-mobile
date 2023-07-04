import { useEffect, useState } from "react";
import { View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import { CardItem } from "../../components/CardItem";
import { window } from "../../constants";
import Loading from "../../components/Loading";
import { Trending } from "../../api/Trending";

const PAGE_WIDTH = window.width;

const COUNT = 3;

const baseOptions = {
  vertical: false,
  width: PAGE_WIDTH / COUNT,
  height: PAGE_WIDTH / 2,
  style: {
    width: PAGE_WIDTH,
  },
};

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function Home() {
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    Trending()
      .then((response) => setTrending(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  if (!trending) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        {...baseOptions}
        loop
        data={trending}
        renderItem={({ item }) => (
          <CardItem
            key={item.id}
            id={item.id}
            mediaType={item.media_type}
            posterUrl={`${BASE_IMAGE_URL}${item.poster_path}`}
          />
        )}
      />
    </View>
  );
}
