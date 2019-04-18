import React, { Component } from 'react'
import { ScrollView, Text, AsyncStorage } from 'react-native'
import DeckBtn from './DeckBtn'
import { connect } from 'react-redux'
import { setLocalNotification } from '../utils/helpers'

class DeckList extends Component {

    componentDidMount () {
        // set notification for today
        setLocalNotification()
    }

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
        const { decks } = this.props 
        
        return (
            <ScrollView style={{ flex: 1 }}>
                {
                    Object.values(decks).map((d) => (
                        <DeckBtn 
                            key={d.title} 
                            deckId={d.title} 
                            totalCards={d.questions.length}
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