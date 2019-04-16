import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware';
import { View } from 'react-native'
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import MyStatusBar from './components/MyStatusBar'

export default class App extends React.Component {  
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={{flex:1}}>
          <MyStatusBar backgroundColor={'black'} barStyle='light-content' />
          <Navigation/>   
        </View>
      </Provider>
    )
  }
}



const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList
  },
  NewDeck:  {
    screen: NewDeck
  }
})

const Stack = createStackNavigator({
  DeckList: {
    screen: DeckList
  },
  NewDeck:  {
    screen: NewDeck
  }
})

const Navigation = createAppContainer(Tabs)





