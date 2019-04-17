export const ADD_DECK = 'ADD_DECK'

export function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function handleInitialData() {
    return (dispatch) => {
        dispatch
    }
}