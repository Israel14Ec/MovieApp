import { movieApi } from "@/core/api/movie-api"
import { Movie } from "@/infrastructure/interfaces/movie.interface"
import { MovieDBResponse } from "@/infrastructure/interfaces/moviedb-response"
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper"

export const popularMoviesAction = async () : Promise<Movie[]> => {

    try {
        const { data } = await movieApi.get<MovieDBResponse>('/popular')
        
        //Mapea el movie
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)
        return movies

    } catch (error) {
        console.log(error)
        throw 'Something went wrong'
    }
}