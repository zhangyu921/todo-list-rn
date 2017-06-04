/**
 * Created by z5141 on 2017/3/16.
 */
import React, {Component}from 'react'
import {View} from 'react-native'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'

export default class App extends Component {
  render(){
    return(
      <View style={{flex:1}}>
        <VisibleTodoList/>
        <AddTodo/>
      </View>
    )
  }
}

