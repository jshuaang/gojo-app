import React,{useState} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {Icon} from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useDispatch, useSelector} from 'react-redux'
import {getTotalItem, getTotalValue, setTotalItem, setTotalValue, setRestId} from '../redux/reducer/itemSlice'
import tw from 'tailwind-react-native-classnames'
import {useNavigation} from '@react-navigation/native'

const CartFood = (props) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [counter, setCounter] = useState(0)
    const totalItem = useSelector(getTotalItem)
    const totalValue = useSelector(getTotalValue)
    
    const item = props.route.params.item
    const totalPrice = counter * item.price
    const restId = props.route.params.restId
    
    return (
        <SafeAreaView style={tw`bg-white`}>
            <View>
                <Image source={item.image} style={tw`h-72 w-full`} />
            </View>
            <View style={tw`flex-row justify-center p-4 items-center my-20`}>
                <TouchableOpacity style={tw`bg-gray-800 rounded-full mr-4`} onPress={() => {counter>0 ? setCounter(counter -1 ) : setCounter(0)}}>
                    <Icon name='minus' type='antdesign' size={30} color='#fff'/>
                </TouchableOpacity>
                <View >
                    <Text style={tw`text-2xl`} >{counter}</Text>
                </View>
                <TouchableOpacity style={tw`bg-gray-800 rounded-full ml-4`} onPress={() => {setCounter(counter+1)}}>
                    <Icon name='plus' type='antdesign' size={30} color='#fff'/>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={tw`bg-gray-800 p-4 w-11/12 rounded-full m-auto`} onPress={() => {
                    dispatch(setTotalItem(totalItem+counter))
                    dispatch(setTotalValue(totalValue+totalPrice))
                    dispatch(setRestId(restId))
                    navigation.goBack('MenuScreen')
                }}>
                    <Text style={tw`text-white text-center`}>Add {counter != 0 ? totalPrice : null}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default CartFood
