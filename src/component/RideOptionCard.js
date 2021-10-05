import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import {Icon} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTravelTimeInformation, setTotalPrice } from '../redux/reducer/locationSlice'

const RideOptionCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [ride, setRide] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const distance = Math.round(travelTimeInformation?.distance.value/1000)

    const data = [
        {
            id: '123',
            title: '1 Person',
            price: 3000,
            image: require('../assets/1person.png')
        },
        {
            id: '456',
            title: '2 Person',
            price: 5000,
            image: require('../assets/2person.png')
        },
        {
            id: '789',
            title: '4 Person',
            price: 7000,
            image: require('../assets/4person.png')
        },

    ]

    const ButtonOrder = () => {
        return (
            <View style={tw`absolute bottom-5 w-full`}>
                <TouchableOpacity style={tw`w-11/12 bg-gray-800 py-4 px-8 rounded-full m-auto flex-row justify-between`}
                onPress={() => {
                    dispatch(setTotalPrice(ride?.price * distance))
                    navigation.navigate('ResultScreen',{type:'ride'}
                    )}}
                >
                        <Text style={tw`text-white text-xl font-bold`}>Order</Text>
                        <View style={tw`flex-row items-center`}>
                            <Text style={tw`text-white font-bold`}>{ride ? ride?.price * distance : null}</Text>
                            <Icon name="rightcircle" type="antdesign" color="white" style={tw`w-10`} />
                        </View>
                </TouchableOpacity>
            </View>
        )
    }
    
    return (
        <View style={tw`bg-white h-full`}>
            <View style={tw`p-5 border-b border-gray-100`}>
                <TouchableOpacity
                style={tw`absolute z-50 top-5 left-5`}
                onPress={() => navigation.navigate('NavigateCard')}
                >
                    <Icon name="arrowleft" type="antdesign" size={30}/>
                </TouchableOpacity>
                <Text style={tw`text-gray-800 font-bold text-xl text-center`}>Select Ride</Text>
            </View>

            <View style={tw`mt-3`}>
                <FlatList 
                    data={data}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            style={tw`px-2 bg-white my-1 py-2 mx-4 rounded-md ${item.title == ride && 'bg-gray-100'}`}
                            onPress={() => setRide(item)}
                        >
                            <View style={tw`flex-row items-center justify-between`}>
                                <Image 
                                    source={item.image}
                                    style={{width:50, height:50}}
                                    resizeMode={'contain'}
                                />
                                <View>
                                    <Text style={tw`font-bold`}>{item.title}</Text>
                                    {travelTimeInformation ? <Text style={tw`font-semibold`}>{travelTimeInformation?.duration.text}</Text> : null}
                                </View>
                                <View style={tw` w-24`}>
                                    {travelTimeInformation ? <Text style={tw`text-lg font-semibold`}>Rp.{distance * item.price}</Text> :null}
                                    {travelTimeInformation ? <Text style={tw`font-semibold`}>{distance} km</Text> : null}
                                </View>
                                </View>
                        </TouchableOpacity>
                    )}
                    />
            </View>
            {ride ? <ButtonOrder /> : null}
        </View>
    )
}

export default RideOptionCard
