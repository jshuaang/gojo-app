import React from 'react'
import { ScrollView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_APIKEY} from "@env"
import {useDispatch, useSelector} from 'react-redux'
import {setOrigin, setDestination} from '../redux/reducer/locationSlice'
import { useNavigation } from '@react-navigation/core'


const GooglePlaceInput = ({placeholder,type}) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <GooglePlacesAutocomplete 
                placeholder={placeholder}
                minLength={2}
                fetchDetails
                enablePoweredByContainer={false}
                onPress={(data,detail) => {
                    if(type === 'origin'){
                        dispatch(setOrigin({
                            location: detail.geometry.location,
                            description: data.description
                        })) 
                    }
                    if(type === 'destination'){
                        dispatch(setDestination({
                            location: detail.geometry.location,
                            description: data.description
                        }))
                        navigation.navigate('RideOptionCard')
                    }
                }}
                styles={{
                    textInput: {
                        height: 50,
                        color: '#5d5d5d',
                        fontSize: 18,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 2.62,
                        elevation: 4
                    },
                    listView: {
                        marginTop: -10,
                        zIndex: 999
                    }
                }}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
            />
        </ScrollView>
    )
}

export default GooglePlaceInput
