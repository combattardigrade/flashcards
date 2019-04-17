import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Deck extends Component {
    
    static navigationOptions = ({ navigation }) => {
        const deckId = navigation.getParam('deckId', 0)
        return {
            title: deckId
        }
    }
    render() {
        const { navigation } = this.props
        const deckId = navigation.getParam('deckId', 0)
        
        return (            
           <View>
               <Text>Deck</Text>
           </View>   
        )
    }
}



export default Deck