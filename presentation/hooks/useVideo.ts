import { getMovieVideoByIdAction } from '@/core/actions/movie/get-movie-video-by-id.action';
import { useQuery } from '@tanstack/react-query';

export const useVideo = (id: number) => {

    const videoQuery = useQuery({
        queryKey: ['video', id],
        queryFn: () =>  getMovieVideoByIdAction(id),
        staleTime: 1000 * 60 *60 * 24, 
        retryOnMount: false
    })

    return {
        videoQuery
    }
}