import { Link } from "expo-router";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import { PosterImage } from "./PosterImage";

export const CardItem = ({ id, mediaType, posterUrl, ...animatedViewProps }) => {
	return (
		<LongPressGestureHandler>
			<Animated.View style={{ flex: 1 }} {...animatedViewProps}>
				<Link href={`/detail/${mediaType}/${id}`} style={{ flex: 1, marginHorizontal: 4 }}>
					<PosterImage posterUrl={posterUrl} />
				</Link>
			</Animated.View>
		</LongPressGestureHandler>
	);
};
