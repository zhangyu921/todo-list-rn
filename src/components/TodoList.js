/**
 * Created by z5141 on 2017/3/14.
 */


import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';
import TodoItem from './TodoItem'


export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.todosDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }
  
  // componentWillReceiveProps(nextProps) {
  //   this.todosDataSource = this.todosDataSource.cloneWithRows(this.props.todos);
  // }
  
  componentDidMount(){
    
  }
  
  render() {
    this.todosDataSource = this.todosDataSource.cloneWithRows(this.props.todos);
    return (
      <ListView
        style={{
          paddingHorizontal:20,

        }}
        enableEmptySections={true}
        dataSource={this.todosDataSource}
        renderRow={(rowData)=>(
          <TodoItem
            key={rowData.id}
            {...rowData}
            onTodoPress={()=>{this.props.onTodoPress(rowData.id)}}
            onDeletePress={()=>{this.props.onDeletePress(rowData.id)}}
          />
        )}
      />
    )
  }
}
