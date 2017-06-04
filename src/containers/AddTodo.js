/**
 * Created by z5141 on 2017/3/16.
 */
import React, {Component} from 'react'
import {View, TextInput, Button} from 'react-native'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

class AddTodo extends Component {
  constructor(p) {
    super(p)
    this.state = {
      text: ''
    }
  }
  
  render() {
    return (
      <View style={{
        flexDirection:'row',
        justifyContent: 'space-between',
        elevation:10,
        backgroundColor:'#eee',
        borderColor:'#ccc'
      }}>
        <TextInput
          style={{
            flex:1,
            padding:5,
            paddingLeft:10
          }}
          underlineColorAndroid='transparent'
          placeholder='输入TODO事项'
          value={this.state.text}
          onChangeText={text=>this.setState({text})}
          onSubmitEditing={()=>{
            if(!this.state.text.trim()){
                return
              }
            this.props.dispatch(addTodo(this.state.text))
            this.setState({text:''})
          }}
        />
        <Button
          title=" Add "
          onPress={
            ()=>{
              if(!this.state.text.trim()){
                return
              }
              this.props.dispatch(addTodo(this.state.text))
              this.setState({text:''})
            }
          }
        />
      </View>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo