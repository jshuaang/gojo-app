import React,{useEffect, useRef} from 'react'
import MapView, { Marker } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useSelector, useDispatch } from 'react-redux'
import { selectOrigin, selectDestination, setTravelTimeInformation } from '../redux/reducer/locationSlice'
import MapViewDirections from 'react-native-maps-directions'
import {GOOGLE_MAPS_APIKEY} from '@env'

const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        if(!origin || !destination) return;

        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'],{
            edgePadding: {top:200, right:100, left:100, bottom:100}
        })
    }, [origin, destination])

    useEffect(() => {
        if(!origin || !destination) return;
        const getTravelTime = async () => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin?.description}&destinations=${destination?.description}&key=${GOOGLE_MAPS_APIKEY}`)
            .then((res) => res.json())
            .then((data) => dispatch(setTravelTimeInformation(data.rows[0].elements[0])))
        }

        getTravelTime()
    }, [origin, destination, GOOGLE_MAPS_APIKEY])

    return (
        <MapView 
            ref={mapRef}
            initialRegion={{
                latitude: origin?.location.lat,
                longitude: origin?.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
            style={tw`w-full h-full`}
        >
            {origin && destination && (
                <MapViewDirections 
                lineDashPattern={[0]}
                origin={{latitude:origin?.location.lat, longitude:origin?.location.lng}}
                destination={{latitude:destination?.location.lat, longitude:destination?.location.lng}}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={2}
                strokeColor="black"
                />
            )}

            {origin?.location && (
                <Marker 
                   coordinate={{
                       latitude: origin?.location.lat,
                       longitude: origin?.location.lng
                   }} 
                   title='Origin'
                   description={origin?.description}
                   identifier= 'origin'
                />
            )}

            {destination?.location && (
                <Marker 
                   coordinate={{
                       latitude: destination?.location.lat,
                       longitude: destination?.location.lng
                   }} 
                   title='Destination'
                   description={destination?.description}
                   identifier= 'destination'
                />
            )}

        </MapView>
    )
}

export default Map
