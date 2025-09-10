import { Cast } from "../interfaces/cast.interface";
import { MovieCast } from "../interfaces/credits.response";

export class CastMapper {

    static fromMovieDBCastToEntity(actor: MovieCast) : Cast {
        return {
            id: actor.id,
            name: actor.name,
            character: actor.character || "",
            avatar: actor.profile_path ? `${process.env.EXPO_PUBLIC_MOVIE_IMAGE}${actor.profile_path}` : 'https://i.stack.imgur.com/l60Hf.png'
        }
    }
}