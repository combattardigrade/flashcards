import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome, Ionicons } from '@expo/vector-icons'

class NewDeck extends Component {
    handlePress = () => {

    }
    render() {
        return (
            <View style={styles.container}>
                <Ionicons style={{marginBottom:20}} name="ios-add-circle" size={100} color='#99999d' />
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput 
                    placeholder="Enter deck title"
                    style={styles.input}
                />
                <TouchableOpacity 
                    title="Submit"
                    style={styles.btn}
                    onPress={this.handlePress}
                >
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    input: {
        marginTop: 10,
        width: wp('82%'),
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
    }
})
export default NewDeck