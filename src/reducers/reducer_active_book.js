// State argument is not application state, only the state
// this reducer is reponsible for
export default function(state = null, action) {
    switch(action, type) {
        case 'BOOK_SELECTED':
        return action.payload;
    }
    
    return state
}