
import React ,{useState,useEffect} from 'react';
import {View,TextInput,Button} from 'react-native'
import { useStore } from '../../../store';
import Constants from '../../../utils/constants';

import { searchStyle } from '../style';


const SearchComponent = () => {

    const[search,setSerach] = useState('')
    const [state,dispatch] = useStore();

    renenderPosts = () =>{
        state.filterdPosts.forEach(item =>{
            item.uniqueKey = Math.floor(Math.random() * (Constants.numbers.max - Constants.numbers.min)) + Constants.numbers.min
        })
        dispatch({ type: 'search', data: state.filterdPosts });
    }

    searchPosts = (input) => {
        if (input) { 
          const newData = state.filterdPosts.filter(function (item) {
            const itemData = item.title
              ? item.title.toUpperCase()
              : ''.toUpperCase();
            const textData = input.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          dispatch({ type: 'search', data: newData });
          setSerach(input);
        } else {
          dispatch({ type: 'search', data: state.postsData });
          setSerach(input);
        }
      };

    return <View >

            <TextInput
            style={searchStyle.inputText}
            onChangeText={(input) => searchPosts(input)}
            placeholder=' Search a text'
            value={search}
            />
            <View style={searchStyle.buttonView}>
                <Button         
                    onPress={renenderPosts}
                    title="Re-render"
                    color='black'
                />
            </View>
    </View>
 }
  

export default SearchComponent;