/**
 * Created by z5141 on 2017/3/14.
 */

import React, {Component, PropTypes} from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native'

const TodoItem = ({text, onTodoPress, onDeletePress, completed}) => (
  <View
    style={{
      borderBottomWidth:1,
      borderBottomColor:'#ccc',
      paddingTop:10,
      paddingLeft:5,
      paddingBottom:0,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
    }}
  >
    
    <View style={{flex:1}}>
      <TouchableOpacity
        onPress={onTodoPress}
      >
        <Text
          style={{
            fontSize:16,
            textDecorationLine:completed?'line-through':'none'
          }}>
          {text}
          </Text>
      </TouchableOpacity>
    </View>
    
    <View
      style={{
          paddingHorizontal:5,
          backgroundColor:'red',
          borderRadius:3
        }}>
      <TouchableOpacity
        onPress={onDeletePress}
      >
        <Text
          style={{
            color:'white'
          }}
        >X</Text>
      </TouchableOpacity>
    </View>
    
  </View>

);

export default TodoItem