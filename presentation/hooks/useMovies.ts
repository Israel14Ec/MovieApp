import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { TopRatedAction } from "@/core/actions/movies/top-rated.action"
import { upcomingAction } from "@/core/actions/movies/upcoming.action"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const useMovies = () => {

    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingAction, //Se manda la funcion como referencia, si no se pasa parámetros
        staleTime: 1000 * 60 *60 * 24, //24horas para volver a hacer la petición
    })

    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction, //Se manda la funcion como referencia, si no se pasa parámetros
        staleTime: 1000 * 60 *60 * 24, //24horas para volver a hacer la petición
    })

    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'topRated'],
        queryFn: ({ pageParam}) => {
            return TopRatedAction({page: pageParam})
        },
        staleTime: 1000 * 60 *60 * 24,
        getNextPageParam: (_, pages) => pages.length + 1 //Siguiente página
    })

    const upcomingQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: upcomingAction,
        staleTime: 1000 * 60 *60 * 24,
    })

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery
    }
}