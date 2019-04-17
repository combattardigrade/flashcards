import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import DeckBtn from './DeckBtn'
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';

class DeckList extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

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
        return (
            <ScrollView style={{ flex: 1 }}>
                {
                    // map decks
                }
                <DeckBtn deckId="1" handlePress={this.handlePress} />
            </ScrollView>
        )
    }
}

export default connect()(DeckList)