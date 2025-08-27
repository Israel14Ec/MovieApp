import { ActivityIndicator, Text, View, ScrollView } from "react-native";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MainSlideshow, MovieHorizontalList } from "@/presentation/components/movies"; 

const HomeScreen = () => {
  //El safe area contiene el tamaño de los elementos del movil como el notch
  // o los botones de abajo de las pantallas

  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className=" justify-center items-center flex-1">
        <ActivityIndicator color={"purple"} size={40} />
      </View>
    );
  }
 
  return (
    <ScrollView
      className=" mt-2 pb-10"
      style={{
        paddingTop: safeArea.top,
        paddingBottom: safeArea.bottom,
      }}
    >
      <Text className=" text-3xl font-bold px-4 mb-2 text-zinc-700">
        Movies<Text className=" text-indigo-500 text-4xl">App</Text>
      </Text>

      {/*Carrousel de imágenes */}
      <MainSlideshow movies={nowPlayingQuery.data ?? []} />

      {/** Popular */}
      <MovieHorizontalList 
        movies={popularQuery.data ?? []}
        title="Populares"
        className=" mb-5"
      />

      {/**Mejor calificadas */}
      <MovieHorizontalList 
        title="Mejor calificadas"
        movies={topRatedQuery.data?.pages.flat() ?? []}
        className=" mb-5"
        loadNextPage={ topRatedQuery.fetchNextPage} //Trae la siguiente página
      />

      {/**Próximas en cines */}
      <MovieHorizontalList 
        title="Próximas en cines"
        movies={upcomingQuery.data ?? []}
        className=" mb-5"
      />
    </ScrollView>
  );
};

export default HomeScreen;
