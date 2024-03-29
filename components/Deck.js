import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'

class Deck extends Component {

    static navigationOptions = ({ navigation }) => {
        const deckId = navigation.getParam('deckId', 0)
        return {
            title: 'Deck: ' + deckId
        }
    }

    handlePress = (page) => {
        const { navigation } = this.props
        const deckId = navigation.getParam('deckId', 0)

        switch(page) {
            case 'NEW_QUESTION':
                return (
                    navigation.navigate('NewQuestion', {deckId})
                )
            case 'START_QUIZ':
                return (
                    navigation.navigate('Quiz', {deckId})
                )
            default:
                return 
        }
    }
    render() {
        const { navigation, decks } = this.props
        const deckId = navigation.getParam('deckId', 0)       
        const totalCards = decks[deckId].questions.length
        
        return (
            <View style={styles.container}>
                <View style={styles.deckContainer}>
                    <MaterialCommunityIcons name="cards" size={100} color="#007aff" />
                    <Text style={styles.deckTitle}>{ deckId }</Text>
                    <Text style={styles.deckSubtitle}>{ totalCards } cards</Text>
                </View>
                <View style={styles.btnsContainer}>
                    <TouchableOpacity onPress={ e => this.handlePress('NEW_QUESTION')} style={styles.secondaryBtn}>
                        <Text >Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ e => this.handlePress('START_QUIZ')} style={styles.primaryBtn}>
                        <Text style={styles.primaryBtnText}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },  
    btnsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    primaryBtn: {
        backgroundColor: '#007aff',
        width: wp('80%'),        
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10
    },
    primaryBtnText:{
        color: 'white'
    },
    secondaryBtn:{
        backgroundColor: 'white',
        width: wp('80%'),
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 0.1
    },
    deckContainer: {        
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',        
    },
    deckTitle: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    deckSubtitle: {
        fontSize: 22,
    }
})

function mapStateToProps({ decks }) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Deck)