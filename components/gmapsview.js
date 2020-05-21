import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
})


export default class map {
    theregion = {};
    
    render() {
        return (
            <View style = {styles.container}>
            <MapView
            provider = {PROVIDER_GOOGLE}
            style = {styles.map}
            region={this.theregion}
            />
            </View>
        );
    }
};
