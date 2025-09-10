import { Trailer } from "@/infrastructure/interfaces/trailer.interface";
import { FlatList } from "react-native";
import { MovieVideo } from "./MovieVideo";

interface Props {
  moviesVideo: Trailer[];
}

export const MovieVideoList = ({ moviesVideo }: Props) => {
  return (
    <FlatList
      data={moviesVideo}
      keyExtractor={(item) => `${item.key}`}
      renderItem={({ item }) => {
        if (!item.key) return <></>;
        return <MovieVideo keyVideo={item.key} />;
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      initialNumToRender={2} // solo renderiza los primeros 2 al inicio
      maxToRenderPerBatch={2} // renderiza 2 más en cada batch
      windowSize={5} // número de items que se mantienen en memoria (tanto antes como después del viewport)
      removeClippedSubviews={true} // ayuda a liberar memoria fuera del viewport
      className=" my-10"
    />
  );
};
