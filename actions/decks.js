export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const GET_DECKS = 'GET_DECKS'
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

export function getDecks () {
    return {
        type: GET_DECKS,
    }
}

