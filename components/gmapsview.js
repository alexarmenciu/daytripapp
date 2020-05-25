import React, { Component } from 'react';
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


export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state={
            region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            },
        };
        console.log(this.state.region);
        
        this.onRegionChange = this.onRegionChange.bind(this);
        this.render = this.render.bind(this);
    }
    
    onRegionChange(region) {
        this.setState({ region });
    }
    
    render() {
        return (
            <View style = {styles.container}>
            <MapView
            style = {styles.map}
            region={this.state.region}
            onRegionChange={this.onRegionChange}
            />
            </View>
        );
    }
};
