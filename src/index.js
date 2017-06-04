import React, {Component} from 'react';
import Storage from 'react-native-storage'
import {Text, View, AsyncStorage} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import trunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import todoApp from './reducers/index';
import App from './components/App';

const loggerMiddleware = createLogger();

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
});

let store;


export default class Index extends Component {
  constructor(p) {
    super(p);
    
    this.state = {
      isLoadingTodo: true
    }
  }
  
  componentDidMount() {
    storage.load({
      key: 'store',
    }).then(
      ret => {
        console.log(ret);
        store = createStore(
          todoApp,
          ret,
          applyMiddleware(
            trunkMiddleware,
            loggerMiddleware
          )
        );
        store.subscribe(() => {
          storage.save({
            key: 'store',
            rawData: store.getState(),
            expires: null
          })
        });
        
        this.setState({
          isLoadingTodo: false
        })
      }).catch(
      err => {
        store = createStore(
          todoApp,
          applyMiddleware(
            trunkMiddleware,
            loggerMiddleware
          )
        );
        store.subscribe(() => {
          storage.save({
            key: 'store',
            rawData: store.getState(),
            expires: null
          })
        });
        this.setState({
          isLoadingTodo: false
        })
      }
    );
  }
  
  render() {
    if (this.state.isLoadingTodo) {
      return (
        <View style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text>Loading...</Text>
        </View>
      )
    }
    
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
    
  }
}


