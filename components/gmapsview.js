import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE, AnimatedRegion, Animated } from 'react-native-maps';
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
            region: new AnimatedRegion({
            latitude: 43.584132,
            longitude: -79.701585,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }),
        };
        console.log(this.state.region);
        
        this.changeRegion = this.changeRegion.bind(this);
        this.onRegionChange = this.onRegionChange.bind(this);
        this.render = this.render.bind(this);
    }
    
    onRegionChange(region) {
        this.state.region.setValue(region);
    }

    changeRegion(region){
        this.state.region.timing({...region, duration: 1500}).start();
    }
    
    render() {
        return (
            <View style = {styles.container}>
            <Animated
            style = {styles.map}
            region={this.state.region}
            onRegionChange={this.onRegionChange}
            />
            </View>
        );
    }
};
