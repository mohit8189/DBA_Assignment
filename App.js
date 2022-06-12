
import React from 'react';
import {SafeAreaView,View,Image,Text} from 'react-native'
import PostComponents from './components/listComponent/view/index.js';
import SearchComponent from './components/serachComponent/view/index.js'
import { StoreProvider} from './store/index.js';
import { fetchPosts, initialState } from './store/reducer/index.js';

const App = () => {
  return (
    <StoreProvider initialState={initialState} reducer={fetchPosts}>
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}} >
          <Image style={{height:200}} source={require('./assets/gif/doggo_walk.gif')} />
          <SearchComponent/>
          <PostComponents/>
        </View>
      </SafeAreaView> 
    </StoreProvider>
  ) 
 }
  

export default App;
