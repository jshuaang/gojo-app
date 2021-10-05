import React from 'react'
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FoodNavigation from '../component/FoodNavigation'
import DrinkNavigation from '../component/DrinkNavigation'
import tw from 'tailwind-react-native-classnames'
import { selectOrigin } from '../redux/reducer/locationSlice'
import { useSelector } from 'react-redux'

const EatScreen = () => {
    const origin = useSelector(selectOrigin)
    return (
        <SafeAreaView style={tw`bg-white`}>
            <View style={tw`bg-white p-3 h-full`}>
                <View style={tw`my-10`}>
                    <Text style={tw`text-gray-800 text-3xl font-bold`}>What would you like to eat?</Text>
                    <Text style={tw`text-gray-600`}>Delivery to {origin?.description}</Text>
                </View>
                <View style={tw`my-2`}>
                    <Text style={tw`text-gray-800 text-xl font-bold px-3`}>Food</Text>
                    <FoodNavigation />
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`text-gray-800 text-xl font-bold px-3`}>Drink</Text>
                    <DrinkNavigation />
                </View>
                <View style={tw`w-full h-60 my-2`}>
                    <Image 
                        source={require('../assets/discvoucher.jpg')}
                        resizeMode='contain'
                        style={{width:'100%', flex:1}}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EatScreen
