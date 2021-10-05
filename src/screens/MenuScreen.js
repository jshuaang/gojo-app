import React,{useState, useEffect} from 'react'
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {menu} from '../utils/menu'
import tw from 'tailwind-react-native-classnames'
import { Icon, Image } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import { useSelector } from 'react-redux'
import {getTotalItem, getTotalValue} from '../redux/reducer/itemSlice'

const MenuScreen = (props) => {
    const navigation = useNavigation()
    const totalItem = useSelector(getTotalItem)
    const totalValue = useSelector(getTotalValue)
    const [restoMenu, setRestoMenu] = useState(null)
    const [restoInfo, setRestoInfo] = useState(null)
    const id = props.route.params.id
    const image = props.route.params.image
    const menus = menu

    useEffect(() => {
        menus.map((menu) => {
            if(menu.id === id){
                setRestoMenu(menu.menu)
                setRestoInfo(menu.info)
            }
        })
    }, [id])

    const ButtonOrder = () => {
        return (
            <TouchableOpacity style={tw`bg-gray-800 p-2 px-5 w-11/12 m-auto my-2 rounded-full flex-row justify-between`}
                onPress={() => navigation.navigate('ResultScreen',{type:'food'})}
                >
                    <View>
                        <Text style={tw`text-white`}>{totalItem} item</Text>
                        <Text style={tw`text-white font-bold`}>Order from {restoInfo?.title}</Text>
                    </View>
                    <View>
                        <Text style={tw`text-white`}>{totalValue}</Text>
                    </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={tw`bg-white`}>
            <ScrollView>
            <View>
                <Image source={image} style={tw`w-full h-60`} />
            </View>
            <View>
                <View style={tw`my-4 px-5`}>
                    <Text style={tw`text-gray-800 text-2xl font-bold`}>{restoInfo?.title}</Text>
                    <Text style={tw`text-gray-400 font-semibold`}>{restoInfo?.category}</Text>
                </View>
                <View style={tw`w-11/12 m-auto p-3 rounded-xl flex-row justify-around bg-gray-800 my-3 py-5`}>
                <View>
                    <Icon name='enviroment' type='antdesign' color='#fff'/>
                    <Text style={tw`text-center text-white text-xs`}>{restoInfo?.location}</Text>
                </View>
                <View>
                    <Icon name="star" type="antdesign" color='#fff'/>
                        <Text style={tw`text-center text-white text-xs`}>{restoInfo?.star}</Text>
                    </View>
                    <View>
                        <Icon name="wallet" type="antdesign" color='#fff' />
                        <Text style={tw`text-center text-white text-xs`}>{restoInfo?.rangeprice}</Text>
                    </View>
                </View>

                <FlatList 
                data={restoMenu}
                renderItem={({item}) => (
                    <TouchableOpacity style={tw`border border-gray-200 flex-row w-full`} onPress={() => navigation.navigate('CartFood',{item, restId: id})}>
                        <Image source={item.image} style={tw`w-24 h-24`} resizeMode='contain'/>
                        <View style={tw`p-3`}>
                            <Text style={tw`text-lg font-semibold mb-5`}>{item.name}</Text>
                            <Text>{item.price}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                />
                {totalItem !== 0 ? <ButtonOrder /> : null}
            </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default MenuScreen
