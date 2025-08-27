import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { router } from "expo-router";
import { View, Text, Pressable, Image } from "react-native";

interface Props {
  id: Movie["id"];
  poster: Movie["poster"];
  title?: Movie["title"];
  smallPoster?: boolean;
  className?: string; 
}

export const MoviesPoster = ({
  id,
  poster,
  title,
  smallPoster = false,
  className,
}: Props) => {
  return (
    <Pressable className={`${className} px-2 active:opacity-90 `}
      onPress={() => router.push(`/movie/${id}`)}
    >
      <View className=" flex justify-center items-center shadow">
        <Image
        source={{ uri: poster }}
        className=" shadow-lg rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 150,
        }}
        resizeMode="cover"
      />
      <Text className="overline text-lg text-zinc-600 font-semibold text-center" numberOfLines={2} ellipsizeMode="tail">
        {title}
      </Text>
      </View>
    </Pressable>
  );
};
