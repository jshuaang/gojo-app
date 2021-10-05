import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Avatar } from 'react-native-elements';
import GooglePlaceInput from '../component/GooglePlaceInput';
import About from '../component/About';
import NavigationMenu from '../component/NavigationMenu';
import {SafeAreaView} from 'react-native-safe-area-context'


const HomeScreen = () => {
    return (
    <SafeAreaView style={tw`bg-gray-800`}>
    <View  style={{minHeight: Math.round(Dimensions.get('window').height), backgroundColor:'white'}}>
        <View style={tw`bg-gray-800 px-10 pt-12 h-60 rounded-b-3xl flex-col flex-none`}>
            <View style={tw`flex-row justify-between`}>
                <View style={tw`flex-row items-center`}>
                    <Avatar rounded title='JO' size="medium" containerStyle={tw`bg-gray-100`}/> 
                    <Text style={tw`text-white font-bold ml-2 text-xl`}>Hi !</Text>
                </View>
                <Image source={require('../assets/gojo.png')} style={{width:80, height:80}} />
             </View>
            <View>
                <Text style={tw`text-center text-white font-bold text-3xl mt-8`}>Let me assist you</Text>
            </View>
        </View>
        <View style={tw`w-11/12 m-auto -mt-5`}>
            <GooglePlaceInput placeholder="Set pick up location" type="origin"/>
        </View>
        <NavigationMenu />
        <About />
    </View>
    </SafeAreaView>
    )}

export default HomeScreen

const styles = StyleSheet.create({})
