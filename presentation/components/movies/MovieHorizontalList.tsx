import { Movie } from '@/infrastructure/interfaces/movie.interface'
import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import { MoviesPoster } from './MoviePoster';
import { useEffect, useRef } from 'react';

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
  loadNextPage?: () => void;
}

export const MovieHorizontalList = ({
  title,
  movies,
  className='',
  loadNextPage
} : Props) => {

  const isLoading = useRef(false);

  //Camnbia el current a false, cuando cambiá las películas
  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies])

  const onScroll = ( e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if(isLoading.current) return;

    const {contentOffset, layoutMeasurement, contentSize } = e.nativeEvent;
    
    const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if(!isEndReached) return
    
    isLoading.current = true;
    
    //TODO:
    console.log('cargar siguientes películas')
    loadNextPage?.();

  }

  return (
    <View className={`${className}`} >
      {title && <Text className=' text-3xl font-bold px-4 mb-2'>{title}</Text>}
      
      <FlatList 
        horizontal
        data={ movies }
        keyExtractor={(_, key) => `${key}`}
        showsHorizontalScrollIndicator={false}
        maxToRenderPerBatch={10} // carga máximo 10 por lote
        renderItem={ ({item}) => <MoviesPoster 
            id={item.id} 
            poster={item.poster} 
            smallPoster
        />}
        onScroll={onScroll}
      />
    </View>
  )
}
