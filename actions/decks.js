export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_CARD = 'ADD_CARD'

import { saveDeck } from '../utils/api'

export function addDeck (deck) {
    saveDeck(deck)
    return {
        type: ADD_DECK,
        deck
    }
}

export function receiveDecks (decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function addCard (card) {
    return {
        type: ADD_CARD,
        card
    }
}


