import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const upcomingAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBResponse>('/upcoming')
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
        return movies
    } catch (error) {
        console.log(error);
        throw "Something went wrong";
    }
}