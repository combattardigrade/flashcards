import { ADD_DECK, RECEIVE_DECKS, GET_DECKS } from '../actions/decks'

export default function decks(state = {}, action){
    switch(action.type) {
        case ADD_DECK:
            return {
                ...state,
                [action.deck.title]: {
                    ...action.deck
                }
            }
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks,
            }            
        case GET_DECKS:
            return state.decks
        default:
            return state
    }
}