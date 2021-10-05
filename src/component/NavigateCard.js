import React from 'react'
import { View, Text} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import GooglePlaceInput from './GooglePlaceInput'

const NavigateCard = () => {
    return (
        <View style={tw`bg-white h-full`}>
            <View style={tw`py-5 border-b border-gray-100`}>
                <Text style={tw`text-center font-bold text-2xl text-gray-800`}>Hello !</Text>
            </View>
            <View style={tw`w-11/12 m-auto mt-10 border-t border-r border-l rounded-md border-gray-100`}>
                <GooglePlaceInput placeholder='Where do you want to go?' type="destination"/>
            </View>
        </View>
        )
}

export default NavigateCard
