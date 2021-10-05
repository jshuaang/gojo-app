import React from 'react'
import { View, Text, Alert } from 'react-native'
import { Icon, Image } from 'react-native-elements'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames'
import {useNavigation} from '@react-navigation/native'
import {getRestId, setRestId, setTotalItem, setTotalValue} from '../redux/reducer/itemSlice'
import { useSelector, useDispatch } from 'react-redux'

const FoodNavigation = () => {
    const dispatch = useDispatch()
    const restId = useSelector(getRestId)
    const navigation = useNavigation()
    const data = [
        {
            id: '123',
            title: 'McDonald',
            location: '12km',
            category: 'Fast food, chicken & duck, rice',
            star: '5.0',
            image: require('../assets/food/mcdonald/Mcdonald.jpg')
        },
        {
            id: '345',
            title: 'Marugame',
            location: '8km',
            category: 'noodle',
            star: '5.0',
            image: require('../assets/food/marugame/Marugame.jpg')
        },
        {
            id: '567',
            title: 'A&W',
            location: '22km',
            category: 'Fast food, chicken & duck, rice',
            star: '5.0',
            image: require('../assets/food/aw/Aw.jpg')
        },
        {
            id: '789',
            title: "D'Crepes",
            location: '1.5km',
            category: 'Snacks',
            star: '5.0',
            image: require('../assets/food/dcrepes/Dcrepes.jpg')
        },
    ]
    return (
        <FlatList 
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
            <TouchableOpacity 
            onPress={() => {
                if(restId !== null){
                    if(restId !== item.id){
                        Alert.alert(
                            "Want to order from this resto instead?",
                            "Sure thing, but we'll need to clear the items in your current cart from the previous resto first.",
                            [
                                {
                                    text: "Cancel",
                                    onPress: () => {navigation.goBack('EatScreen')},
                                    style: 'cancel'
                                },
                                {
                                    text: "Yes, go ahead",
                                    onPress: () => {
                                        dispatch(setRestId(null))
                                        dispatch(setTotalValue(0))
                                        dispatch(setTotalItem(0))
                                    }
                                }
                            ]
                        )
                    }
                    navigation.navigate('MenuScreen', {id:item.id, image:item.image})
                }
                navigation.navigate('MenuScreen', {id:item.id, image:item.image})
            }}
            style={tw`flex-row rounded-xl my-2 mr-3 w-80 border border-gray-100`}>
                <View>
                    <Image source={item.image} style={tw`h-32 w-32 rounded-xl overflow-hidden`} resizeMode={'stretch'} />
                </View>
                <View style={tw`p-2 w-full`}>
                    <View style={tw`border-b border-gray-200 pb-2`}>
                        <Text style={tw`text-gray-800 font-bold text-xl`}>{item.title}</Text>
                        <Text style={tw`text-gray-500`}>{item.category}</Text>
                    </View>
                    <View style={tw`pt-2`}>
                        <Text style={tw`mb-1`}>{item.location}</Text>
                        <View style={tw`flex-row items-center`}>
                            <Icon name='star' type='antdesign' size={12} color='#fca503'/>
                            <Text style={tw`ml-2`}>{item.star}</Text>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        )}
        />
    )
}

export default FoodNavigation
