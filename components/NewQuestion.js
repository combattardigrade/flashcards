import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux'
import { addCard } from '../actions/decks'
import { Ionicons } from '@expo/vector-icons'

class NewQuestion extends Component{
    state = {
        question: '',
        answer: ''
    }
    static navigationOptions = ({ navigation }) => {
        const deckId = navigation.getParam('deckId', 0)
        return {
            title: 'Add card to ' + deckId
        }
    }
    handlePress = () => {
        const { dispatch, navigation } = this.props
        const { question, answer } = this.state
        const deckId = navigation.getParam('deckId', 0)
        // redux 
        dispatch(addCard({
            deckId,
            question,
            answer,
        }))
        
        navigation.pop()

        // clear state
        this.setState({
            question: '',
            answer: ''
        })
    }
    handleQuestionInput = (text) => {
        this.setState({
            question: text
        })
    }
    handleAnswerInput = (text) => {
        this.setState({
            answer: text
        })
    }
    render() {
        
        return ( 
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Ionicons style={{marginBottom:20}} name="ios-add-circle" size={100} color='#007aff' />
                <Text style={styles.title}>Add Card</Text>
                <TextInput 
                    placeholder="Question"
                    style={styles.input}
                    onChangeText={this.handleQuestionInput}
                    value={this.state.question}
                />
                <TextInput 
                    placeholder="Answer"
                    style={styles.input}
                    onChangeText={this.handleAnswerInput}
                    value={this.state.answer}
                />
                <TouchableOpacity 
                    title="Submit"
                    style={styles.btn}
                    onPress={this.handlePress}
                >
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        marginTop: 10,
        width: wp('80%'),
        height: 50,
        borderColor: '#e8e8e8',
        borderWidth: 0.5,
        borderRadius: 5,
        fontSize: 14,
        padding: 10,
    },
    btn: {
        backgroundColor: '#007aff',
        color: '#ffffff',
        width: wp('80%'),
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    btnText: {
        color: 'white',
        fontSize:14
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22
    }
})

export default connect()(NewQuestion)