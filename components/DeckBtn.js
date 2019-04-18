import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

function DeckBtn(props) {
    const { deckId, totalCards, handlePress } = props
    
    return (
        <TouchableOpacity onPress={(e) => { handlePress(deckId) }}>
            <View style={styles.btnContainer}>
                <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                    <MaterialCommunityIcons name="cards-outline" size={60} color="#007aff" />
                </View>
                <View style={styles.deckContainer}>
                    <Text style={styles.deckTitle}>{ deckId }</Text>
                    <Text style={styles.deckSubtitle}>{ totalCards } cards</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <AntDesign name="right" size={20} color="gray" />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#f2f2f2',
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        height: hp('15%'),
        borderColor: '#e8e8e8',
        borderWidth: 0.5,
        borderRadius: 5,
        
    },  
    deckContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        
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
