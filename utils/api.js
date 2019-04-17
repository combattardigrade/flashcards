import { AsyncStorage } from 'react-native'


export function getInitialData() {    
    return Promise.all([getDecks()])
        .then(([decks,]) => ({
            decks
        }))
}

export function getDecks() {
    return AsyncStorage.getItem('DECKS')
        .then((decks) => {
            if(!decks) {
                return {}
            }
            return JSON.parse(decks)
        })
}

export function saveDeck(deck) {
    return AsyncStorage.mergeItem('DECKS', JSON.stringify({
        [deck.title]: deck
    }))        
}