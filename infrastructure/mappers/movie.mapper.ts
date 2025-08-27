import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { MovieDBMovieResponse } from "../interfaces/moviedb-movie.response";
import { Result } from "../interfaces/moviedb-response";

export class MovieMapper {

    static fromTheMovieDBToMovie = (movie: Result) : Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: movie.release_date,
            raiting: movie.vote_average,
            poster:`${process.env.EXPO_PUBLIC_MOVIE_IMAGE}${movie.poster_path}`,
            backdrop:`${process.env.EXPO_PUBLIC_MOVIE_IMAGE}${movie.backdrop_path}`,
        }
    }

    static formTheMovieDBToCompleteMovie = (movie: MovieDBMovieResponse) : CompleteMovie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: movie.release_date,
            raiting: movie.vote_average,
            poster:`${process.env.EXPO_PUBLIC_MOVIE_IMAGE}${movie.poster_path}`,
            backdrop:`${process.env.EXPO_PUBLIC_MOVIE_IMAGE}${movie.backdrop_path}`,
            budget: movie.budget,
            genres: movie.genres.map(g => g.name),
            duration: movie.runtime,
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map(p => p.name),

        }
    }
}