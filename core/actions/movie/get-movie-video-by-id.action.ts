import { movieApi } from "@/core/api/movie-api";
import { MovieVideoResponse } from "@/infrastructure/interfaces/movie-video.response";
import { Trailer } from "@/infrastructure/interfaces/trailer.interface";
import { VideoMapper } from "@/infrastructure/mappers/video.mapper";

export const getMovieVideoByIdAction = async (id: number) : Promise<Trailer[]> => {
    try {
        const { data } = await movieApi.get<MovieVideoResponse>( `/${id}/videos?language=es-MX`)
        
        const trailer = data.results.map(VideoMapper.movieVideoToTrailer)
        return trailer

    } catch (error) {
        console.log(error)
        throw 'Can not found video by id'

    }
}