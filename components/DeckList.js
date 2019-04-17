import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import DeckBtn from './DeckBtn'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'

class DeckList extends Component {

     

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Decks'
        }
    }


    handlePress = (deckId) => {
        this.props.navigation.navigate('Deck', {
            deckId: deckId
        })
    }

    render() {
        const { decks } = this.props
        
        console.log(this.props)
        return (
            <ScrollView style={{ flex: 1 }}>
                
                
            </ScrollView>
        )
    }
}

function mapStateToProps({ decks }) {    
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)