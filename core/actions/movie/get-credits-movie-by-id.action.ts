import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { CreditsResponse } from "@/infrastructure/interfaces/credits.response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getCreditsMovieById = async (id: number) : Promise<Cast[]> => {
    try {
        const { data } = await movieApi.get<CreditsResponse>(`/${id}/credits`)
        const cast = data.cast.map(CastMapper.fromMovieDBCastToEntity)
        return cast
    } catch (error) {
        console.log(error);
        throw 'Can not load cast'
    }
}