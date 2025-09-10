
import { MovieCast, MovieDescription, MovieHeader, MovieVideo, MovieVideoList } from "@/presentation/components/movie";
import { useMovie } from "@/presentation/hooks/useMovie";
import { useMovieCast } from "@/presentation/hooks/useMovieCast";
import { useVideo } from "@/presentation/hooks/useVideo";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

export const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery } = useMovie(+id);
  const { movieCastQuery } = useMovieCast(+id)
  const { videoQuery } = useVideo(+id)

  if (movieQuery.isLoading) {
    return (
      <View className=" flex flex-1 justify-center items-center">
        <Text className=" mb-4">Espere por favor</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  if (!movieQuery.data) {
    return (
      <View>
        <Text className=" flex flex-1 justify-center items-center text-2xl font-semibold text-gray-700">
          No se encontró la <Text className=" text-blue-600">película</Text>
        </Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader 
        poster={movieQuery.data.poster}
        originalTitle={movieQuery.data.originalTitle}
        title={movieQuery.data.title}
      />

      { videoQuery.data && (
        <MovieVideoList moviesVideo={videoQuery.data}  />
      )}

      <MovieDescription 
        movie={movieQuery.data}
      />

      { movieCastQuery.data && (
        <MovieCast 
          casts={movieCastQuery.data}
        />
      )}
    </ScrollView>
  );
};

export default MovieScreen;
