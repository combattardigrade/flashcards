import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';

class Quiz extends Component {

    state = {
        counter: 0,
        correct: 0,
        incorrect: 0,
        showAnswer: false
    }

    static navigationOptions = ({ navigation }) => {
        const deckId = navigation.getParam('deckId', 0)
        return {
            title: 'Quiz: ' + deckId
        }
    }

    handlePress = (answer) => {
        // update score   
        answer === 'correct'
            ? this.setState({ correct: this.state.correct + 1 })
            : this.setState({ incorrect: this.state.incorrect + 1 })
        // increase counter
        this.setState({
            counter: this.state.counter + 1,
            showAnswer: false
        })

    }

    handleShowAnswer = () => {
        this.setState({
            showAnswer: true
        })
    }

    handleRestart = () => {        
        this.setState({
            counter: 0,
            correct: 0,
            incorrect: 0,
            showAnswer: false
        })
    }

    handleBack = () => {
        const { navigation } = this.props
        navigation.pop()
    }

    render() {
        const { decks, navigation } = this.props
        const { counter, correct, showAnswer } = this.state
        const deckId = navigation.getParam('deckId', 0)
        const totalQuestions = decks[deckId].questions.length       

        if(counter <= (totalQuestions - 1) ) {
            const answer = decks[deckId].questions[counter].answer
        }

        return (
            <View style={styles.pageContainer}>
                {
                    counter <= (totalQuestions - 1)
                        ?
                        <View style={{ flex: 1 }}>
                            <View style={styles.questionContainer}>
                                <Text style={{ marginTop: 10 }}>Question {counter + 1} of {totalQuestions}</Text>
                                <Text style={styles.questionTitle}>{decks[deckId].questions[counter].question}</Text>
                                {
                                    showAnswer === false
                                    ?   
                                        <TouchableOpacity style={styles.secondaryBtn} onPress={this.handleShowAnswer}>
                                            <Text>Show Answer</Text>
                                        </TouchableOpacity>
                                    :
                                        <Text>{ answer }</Text>
                                }                                
                            </View>
                            <View style={styles.btnsContainer}>                                
                                <TouchableOpacity style={styles.primaryBtn} onPress={e => this.handlePress('correct')}>
                                    <Text style={styles.btnText}>Correct</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.dangerBtn} onPress={e => this.handlePress('incorrect')}>
                                    <Text style={styles.btnText}>Incorrect</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        <View style={styles.completedContainer}>
                            <Text style={[styles.questionTitle,{marginBottom:20}]}>Quiz completed!</Text>
                            <Text style={{}}>Correct answers: </Text>
                            <Text style={{marginBottom: 20,fontSize:18}}>{(correct / totalQuestions * 100).toFixed(2)}%</Text>
                            <TouchableOpacity style={styles.primaryBtn} onPress={this.handleRestart} >
                                <Text style={styles.btnText}>Restart Quiz</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.secondaryBtnLg} onPress={this.handleBack}>
                                <Text style={{color: 'black'}}>Back to Deck</Text>
                            </TouchableOpacity>
                        </View>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    questionContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: wp('80%'),
    },
    btnsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    questionTitle: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center'
    },
    primaryBtn: {
        backgroundColor: '#007aff',
        width: wp('80%'),
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dangerBtn: {
        backgroundColor: '#f50057',
        width: wp('80%'),
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    secondaryBtn:{
        backgroundColor: 'white',
        width: wp('30%'),
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 0.1,
        marginTop: 10
    },
    secondaryBtnLg:{
        backgroundColor: 'white',
        width: wp('80%'),
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 0.1,
        marginTop: 10
    },
    btnText: {
        color: 'white'
    },
    completedContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function mapStateToProps({ decks }) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Quiz)