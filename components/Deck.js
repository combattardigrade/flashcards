import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Deck extends Component {

    static navigationOptions = ({ navigation }) => {
        const deckId = navigation.getParam('deckId', 0)
        return {
            title: deckId
        }
    }

    handlePress = (page) => {
        const { navigation } = this.props
        switch(page) {
            case 'NEW_QUESTION':
                return navigation.navigate('NewQuestion')
            case 'START_QUIZ':
                return navigation.navigate('Quiz')
            default:
                return
        }
    }
    render() {
        const { navigation } = this.props
        const deckId = navigation.getParam('deckId', 0)

        return (
            <View style={styles.container}>
                <View style={styles.deckContainer}>
                    <Text style={styles.deckTitle}>Deck Title</Text>
                    <Text style={styles.deckSubtitle}>0 cards</Text>
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
        backgroundColor: 'black',
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
        justifyContent: 'center',
        alignItems: 'center',        
    },
    deckTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    deckSubtitle: {
        fontSize: 14,
    }
})


export default Deck