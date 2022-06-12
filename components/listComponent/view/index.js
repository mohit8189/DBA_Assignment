
import React,{useEffect} from 'react';
import {View,FlatList,Text} from 'react-native'
import { useStore } from '../../../store';
import Constants from '../../../utils/constants';
import { postListStyle } from '../style';

const axios = require('axios');
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const PostComponents = () => {

  const[state,dispatch] = useStore();

    useEffect(() => {
        const getPosts = async () => {
            let response = await  axios.get(`/posts`);
            let data =  Array(30).fill(response.data).flat();
            data.forEach(item =>{
              item.uniqueKey = Math.floor(Math.random() * (Constants.numbers.max - Constants.numbers.min)) + Constants.numbers.min
            })
            if (response.status == Constants.apiResponse.statusCode.success) {
                dispatch({ type: 'success', data: Array(30).fill(response.data).flat() });
                return;
            }
            dispatch({ type: 'error', error: response.error });
        };
        getPosts();
    }, []);


  return  <View style={postListStyle.container}>
              <FlatList
              keyExtractor={() => Math.floor(Math.random() * (Constants.numbers.max - Constants.numbers.min)) + Constants.numbers.min}
              data={state.filterdPosts}
              renderItem={({item}) => <RenderItem itemData={item} uniqueKey={item.uniqueKey} /> }
              />
          </View>
}
 
 const RenderItem = (prop) =>{
   return <View >
     <Text >{`${prop.itemData.id}: ${prop.itemData.body}`}</Text>
     <Text style={postListStyle.fontStyle}>{prop.uniqueKey}</Text>
   </View>
 }
  

export default PostComponents;