import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Cast } from '@/infrastructure/interfaces/cast.interface'
import { ActorCard } from './ActorCard'

interface Props {
    casts: Cast[] 
}

export const MovieCast = ( { casts } : Props) => {
  return  (
    <FlatList 
        horizontal
        data={casts}
        keyExtractor={(_, key) => key.toString()}
        showsHorizontalScrollIndicator={false}
        maxToRenderPerBatch={10}
        renderItem={ ({item}) => <ActorCard actor={item} /> }
    />
  )
}

