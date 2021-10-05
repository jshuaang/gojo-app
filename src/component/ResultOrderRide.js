import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {useSelector} from 'react-redux'
import { selectOrigin, selectDestination, selectTravelTimeInformation, selectTotalPrice } from '../redux/reducer/locationSlice'

const ResultOrderRide = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const totalPrice = useSelector(selectTotalPrice)

    return (
        <View style={tw`border border-gray-200 h-1/4 px-5`}>
            <View>
                <Text style={tw`font-bold`}>Your location:</Text>
                <Text>{origin?.description}</Text>
            </View>
            <View style={tw`my-3`}>
                <Text style={tw`font-bold`}>Your Destination:</Text>
                <Text>{destination?.description}</Text>
            </View>
            <View>
                <Text style={tw`font-bold`}>Ride information:</Text>
                <Text>Distance      : {Math.round(travelTimeInformation?.distance.value/1000)} km</Text>
                <Text>Total price   : {totalPrice}</Text>
            </View>
        </View>
    )
}

export default ResultOrderRide
