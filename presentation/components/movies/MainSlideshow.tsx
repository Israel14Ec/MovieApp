import { useRef } from "react";
import { useWindowDimensions, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { Movie } from "../../../infrastructure/interfaces/movie.interface";
import { MoviesPoster } from "./MoviePoster";

interface Props {
  movies: Movie[];
}

export const MainSlideshow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);

  //Toma el with del dispositivo en tiempo real
  const width = useWindowDimensions().width;

  return (
    <View className=" h-[200px] w-full">
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => (
          <MoviesPoster id={item.id} poster={item.poster} title={item.title} />
        )}
        width={250} //with de los cards internos
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax" //Efecto de que se mueve los cards
      />
    </View>
  );
};
