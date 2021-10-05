import React from 'react'
import { View, Text, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const About = () => {
    return (
        <View style={tw`h-56 bg-gray-800 flex-col p-5`}>
            <View style={tw`flex-row`}>
                <View>
                    <Text style={tw`text-white text-xl font-bold mb-2`}>GOJO App</Text>
                    <Text style={tw`text-white`}>Gojo is beyond an app for online transportation, food delivery, and daily services.</Text>
                    <Text style={tw`text-white`}>Gojo is also an app with a social mission: to improve the welfare and livelihoods of the Indonesian people. How? By empowering people!</Text>
                </View>
                <View>
                    
                </View>
            </View>
            <Text style={tw`text-white text-lg font-semibold mt-2`}>Find me at:</Text>
            <View style={tw`flex-row`}>
                <Image 
                source={require('../assets/instagram.png')}
                style={{width:20,height:20}}/>
                <Text style={tw`text-white font-semibold`}>@jshuaang</Text>
            </View>
        </View>
    )
}

export default About
