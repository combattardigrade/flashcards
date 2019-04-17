import React from 'react'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware';
import { View, AsyncStorage } from 'react-native'
import MyStatusBar from './components/MyStatusBar'
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'


class App extends React.Component {

  render() {
    
        
    const persistConfig = {
      key: 'root',
      storage
    }
    const persistedReducer = persistReducer(persistConfig, reducer)
    const store = createStore(persistedReducer, middleware)
    const persistor = persistStore(store)
    //persistor.purge()
    return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor} >
            <View style={{ flex: 1 }}>
              <MyStatusBar backgroundColor={'black'} barStyle='light-content' />
              <Navigation />
            </View>
          </PersistGate>
      </Provider>
    )
  }
}

export default App

// React Navigation and Redux integration
// https://reactnavigation.org/docs/en/redux-integration.html

const Tabs = createBottomTabNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      title: 'Home',
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: 'Add Deck',
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle-outline' size={30} color={tintColor} />
    }
  }
})

const Stack = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      /*header: null,*/
      title: 'Decks',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      /*title: 'Add Card',*/
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  }
})

const Navigation = createAppContainer(Stack)





