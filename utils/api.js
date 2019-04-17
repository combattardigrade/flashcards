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
            return decks
        })
}

/*
export async function getDecks() {
    try {
        const value = await AsyncStorage.getItem('DECKS')
        if (value !== null) {
            return value
        }
    } catch(err) {
        console.log(err)
    }
}*/