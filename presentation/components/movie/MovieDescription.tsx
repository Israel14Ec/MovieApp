import { Formatter } from '@/config/helpers/formatter';
import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface'
import { View, Text } from 'react-native'

interface Props {
    movie: CompleteMovie;
}

export const MovieDescription = ({movie} : Props) => {
  return (
    <View className=' mx-5 py-5'>
      <Text>MovieDescription</Text>
      <View className=' flex flex-row'>
        <Text> { movie.raiting} </Text>
        <Text> - { movie.genres.join(', ')} </Text>
      </View>

      <Text className=' font-bold mt-5 text-xl'>
        Historia
      </Text>
      <Text className=' font-normal mt-2'> { movie.description}  </Text>

      <View className=' flex flex-row items-center mt-2'>
        <Text className=' text-blue-500 font-bold'>Presupuesto: </Text>
        <Text className='font-semibold'> { Formatter.currency(movie.budget)}  </Text>
      </View>
    </View>
  )
}