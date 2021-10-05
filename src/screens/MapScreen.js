import React from 'react'
import { View  } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavigateCard from '../component/NavigateCard'
import RideOptionCard from '../component/RideOptionCard'
import Map from '../component/Map'
import {createStackNavigator} from '@react-navigation/stack'

const MapScreen = () => {
    const stack = createStackNavigator()

    return (
            <View>
                <View style={tw`h-1/2`}>
                    <Map />
                </View>
                <View style={tw`h-1/2`}>
                    <stack.Navigator screenOptions={{headerShown: false}}>
                        <stack.Screen name="NavigateCard" component={NavigateCard}/>
                        <stack.Screen name="RideOptionCard" component={RideOptionCard}/>
                    </stack.Navigator>
                </View>
            </View>
    )
}

export default MapScreen