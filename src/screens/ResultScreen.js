import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ResultOrderFood from '../component/ResultOrderFood'
import ResultWaiting from '../component/ResultWaiting'
import tw from 'tailwind-react-native-classnames'
import ResultOrderRide from '../component/ResultOrderRide'
import {useNavigation} from '@react-navigation/native'
import { setRestId, setTotalItem, setTotalValue} from '../redux/reducer/itemSlice'
import {setOrigin, setDestination, setTravelTimeInformation, setTotalPrice} from '../redux/reducer/locationSlice'
import {useDispatch} from 'react-redux'

const ResultScreen = (props) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const type = props.route.params.type

    return (
        <SafeAreaView>
            <ResultWaiting />
            {type === 'ride' ? <ResultOrderRide /> : <ResultOrderFood />}
            <TouchableOpacity style={tw`bg-gray-800 w-11/12 m-auto rounded-full p-3 mt-10`}
            onPress={() =>{
                dispatch(setDestination(null))
                dispatch(setTravelTimeInformation(null))
                dispatch(setTotalPrice(null))
                dispatch(setTotalItem(0))
                dispatch(setTotalValue(0))
                dispatch(setRestId(null))
                navigation.navigate('HomeScreen')
            }}
            >
                <Text style={tw`text-white text-xl text-center`}>Close order</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ResultScreen
