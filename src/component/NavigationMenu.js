import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import {selectOrigin} from '../redux/reducer/locationSlice'
import {useSelector} from 'react-redux'



const NavigationMenu = () => {
    const origin = useSelector(selectOrigin)
    const navigation = useNavigation()

    const data = [
        {
            id: '123',
            title: 'Get ride',
            image: require('../assets/ride.png'),
            screen: 'MapScreen'
        }, 
        {
            id: '456',
            title: 'Order food',
            image: require('../assets/food.png'),
            screen: 'EatScreen'
        }
    ]

    return (
        <View style={tw.style(tw`py-14 m-auto flex-grow`,{zIndex:-1})}>
                <FlatList 
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={
                        ({item}) => (
                            <TouchableOpacity 
                            style={tw`bg-gray-200  mx-5 px-5 h-48 rounded-md`} 
                            onPress={() => {
                                if(!origin) return; 
                                navigation.navigate(item.screen)
                            }
                            }>
                                <View >
                                    <Image 
                                        source={item.image}
                                        style={{width: 100, height:100}}
                                    />
                                    <Text style={tw`font-bold text-lg`}>{item.title}</Text>
                                    <Icon 
                                        name="rightcircle"
                                        type="antdesign"
                                        style={tw`p-2 w-10`}
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                    }
                />
            </View>
    )
}

export default NavigationMenu
