import React from 'react';
import {Button} from 'react-native';

const getUserLocation = props =>{
    return(
        <Button title= 'Find me a Trip' onPress = {props.onGetUserLocation}/>
    );
};

export default getUserLocation;