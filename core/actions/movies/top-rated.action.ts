import { movieApi } from "@/core/api/movie-api";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const TopRatedAction = async ({page = 1, limit = 10}: Options): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MovieDBResponse>(`/top_rated`, {
      params: {
        page: page,
        limit: limit
      }
    });
    //Mapea el movie
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    return movies;

  } catch (error) {
    console.log(error);
    throw "Something went wrong";
  }
};
