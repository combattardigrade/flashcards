import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function DeckBtn(props) {
    const { deckId, handlePress } = props
    
    return (
        <TouchableOpacity onPress={(e) => { handlePress(deckId) }}>
            <View style={{ backgroundColor: '#FBFCFC' }}>
                <View style={styles.deckContainer}>
                    <Text style={styles.deckTitle}>Deck Title</Text>
                    <Text style={styles.deckSubtitle}>0 cards</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    deckContainer: {
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        height: hp('20%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#e8e8e8',
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: '#ffffff'
    },
    deckTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    deckSubtitle: {
        fontSize: 14,

    }
})

export default DeckBtn
