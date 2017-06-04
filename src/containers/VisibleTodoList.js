/**
 * Created by z5141 on 2017/3/16.
 */

import {connect} from 'react-redux'
import {toggleTodo,deleteTodo} from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps=(state) => {
  return {
    todos:state.todos
  }
};

const mapDispatchToProps = (dispatch)=>{
  return{
    onTodoPress: (id)=>{
      dispatch(toggleTodo(id))
    },
    onDeletePress:(id)=>{
      dispatch(deleteTodo(id))
    },
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);


export default VisibleTodoList