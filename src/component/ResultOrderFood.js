import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {useSelector} from 'react-redux'
import {selectOrigin} from '../redux/reducer/locationSlice'
import {getTotalItem, getTotalValue} from '../redux/reducer/itemSlice'

const ResultOrderFood = () => {
    const origin = useSelector(selectOrigin)
    const totalItem = useSelector(getTotalItem)
    const totalValue = useSelector(getTotalValue)
    const ongkir = 12000
    const total = ongkir + totalValue

    return (
        <View style={tw`border border-gray-200 h-1/4 px-5`}>
            <View>
                <Text style={tw`text-lg font-bold`}>Your location :</Text>
                <Text>{origin?.description}</Text>
            </View>
            <View style={tw`my-5 w-40`}>
                <Text style={tw`text-lg font-bold`}>Your Order :</Text>
                <Text style={tw`text-right`}>{totalItem} item = {totalValue}</Text>
                <Text style={tw`text-right`}>Ongkir = {ongkir}</Text>
                <Text style={tw`text-right font-bold`}>Total = {total}</Text>
            </View>
        </View>
    )
}

export default ResultOrderFood
