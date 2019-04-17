import { ADD_DECK, RECEIVE_DECKS, ADD_CARD } from '../actions/decks'

export default function decks(state = {}, action){
    switch(action.type) {
        case ADD_DECK:
            return {
                ...state,
                [action.deck.title]: {
                    ...action.deck
                }
            }
        case ADD_CARD:
            const { card } = action
            return {
                ...state,
                [card.deckId]: {
                    ...state[card.deckId],
                    questions: state[card.deckId].questions.concat({question: card.question, answer: card.answer})                            
                }
            }
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks,
            }           
        
        default:
            return state
    }
}