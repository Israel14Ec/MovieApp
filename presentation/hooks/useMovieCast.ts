import { getCreditsMovieById } from "@/core/actions/movie/get-credits-movie-by-id.action"
import { useQuery } from "@tanstack/react-query"

export const useMovieCast = (id: number) => {

    const movieCastQuery = useQuery({
        queryKey: ['movie-cast', id],
        queryFn: () => getCreditsMovieById(id),
        staleTime: 1000 *60 *60 *24
    })


    return {
        movieCastQuery
    }
}