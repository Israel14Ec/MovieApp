import { MovieVideoResponse, ResultVideoMovie } from "../interfaces/movie-video.response";
import { Trailer } from "../interfaces/trailer.interface";

export class VideoMapper {
    
    static movieVideoToTrailer(video: ResultVideoMovie) : Trailer {

        return {
            name: video.name,
            site: video.site,
            key: video.key,
        }
    }
}