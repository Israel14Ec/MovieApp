import { router } from 'expo-router';
import { View, Text, useWindowDimensions, Image, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient"

interface Props {
    poster: string;
    originalTitle: string;
    title: string;
}

export const MovieHeader = ({poster, originalTitle, title} : Props) => {

    const { height } = useWindowDimensions()

  return (
    <>

        {/** Gradiente */}
        <LinearGradient 
            colors={['rgba(0,0,0, 0.3)', 'transparent']}
            start={[0, 0]} //la primero posicion es x la segunda es y
            style={{
                height: height * 0.4,
                position: 'absolute',
                zIndex: 1,
                width: '100%',
            }}
        />

        {/*Bot+pn de regreso */}

        <View style={{
            position: 'absolute',
            zIndex: 90,
            elevation: 9, //Se usa en android para controlar la sombra y ordén de apilamiento
            top: 30,
            left: 10,
            marginTop: 5
        }}>
            <Pressable
                onPress={() => router.dismiss()}
            >
                <Ionicons 
                    name='arrow-back'
                    size={30}
                    color={'white'}
                    className='shadow'
                />
            </Pressable>
        </View>

        <View
            style={{ height: height * 0.7 }}
            className=' shadow-xl shadow-black/20'
        >   
            <View className=' flex-1 rounded-b-[25px] overflow-hidden '>
                <Image 
                    source={{ uri:poster}}
                    resizeMode='cover'
                    className='flex-1'
                />
            </View>
        </View>

        <View className=' px-5 mt-5'>
            <Text className=' font-normal'>{originalTitle} </Text>
            <Text className=' font-bold text-2xl text-blue-600'>{title} </Text>
        </View>
    </>
  )
}
