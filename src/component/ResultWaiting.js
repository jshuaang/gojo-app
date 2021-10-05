import React from 'react'
import { Image } from 'react-native'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const ResultWaiting = () => {
    return (
        <View>
            <Text style={tw`text-center text-gray-600 mt-10 text-xl`}>Please wait...</Text>
            <Image source={require('../assets/wait-driver.png')} style={{width:400, height:400}}/>
        </View>
    )
}

export default ResultWaiting
