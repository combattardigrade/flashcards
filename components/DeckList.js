import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import DeckBtn from './DeckBtn'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'

class DeckList extends Component {

    state = {
        refresh: ''
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
        const { decks, navigation, dispatch } = this.props        

        const willFocusSubscription = navigation.addListener(
            'willFocus',
            payload => {
                
                console.log(decks)
            }
        )
        
        return (
            <ScrollView style={{ flex: 1 }}>
                {
                    Object.values(decks).map((d) => (
                        <DeckBtn 
                            key={d.title} 
                            deckId={d.title} 
                            totalCards={d.questions.lenght}
                            handlePress={this.handlePress} 
                        />
                    ))
                }
                
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