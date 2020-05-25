/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import GetUserLocation from './components/getlocation';
import Map from './components/gmapsview'
import Geolocation from '@react-native-community/geolocation';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const googleMap = new Map();

  getUserLocationHandler = () => {
    Geolocation.getCurrentPosition(success, theError => console.log(theError), {maximumAge: 0})
  }
  

  function success(pos) {
    var crd = pos.coords;
    var newregion = {
      latitude: crd.latitude,
      longitude:crd.latitude,
      latitudeDelta: 0.08,
      longitudeDelta: 0.08
    }
    
    googleMap.onRegionChange(newregion)
    googleMap.render

    console.log('the recieved coordinate is:' + crd.latitude)
  }


  return (
    <>
      <googleMap.render />
      <View style={[{width: '40%', backgroundColor: 'rgba(52, 52, 52, 0.0)', position:'absolute', bottom:'90%', left:'30%'}]} > 
        <GetUserLocation onGetUserLocation = {getUserLocationHandler}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
