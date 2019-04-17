import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Quiz extends Component {
    render() {
        return (
            <View style={styles.pageContainer}>
                <View style={styles.questionContainer}>
                    <Text style={styles.questionTitle}>Does React Native work with Android?</Text>
                </View>
                <View style={styles.btnsContainer}>
                    <TouchableOpacity style={styles.primaryBtn}>
                        <Text style={styles.btnText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dangerBtn}>
                        <Text style={styles.btnText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
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
    btnText: {
        color: 'white'
    }
})

export default Quiz