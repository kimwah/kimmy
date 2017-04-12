/**
 * ANDROID
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//Import Lib
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Component
const App = () => { 
  return (
    <View style={{ flex:1 }}>
      <Header headerText={'Kimmy Running Fast Speed!!'} />
      <AlbumList />
    </View>  
  ); 
};

//Rendering something
AppRegistry.registerComponent('kimmy', () => App);
