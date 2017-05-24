
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index: index // can also use enhanced literal syntax 
    }
}
export function decrement(index) {
    return {
        type: 'DECREMENT_LIKES',
        index: index
    }
}
export function addComment(index) {
    return {
        type: 'ADD_COMMENT'
    }
}
export function removeComment(index) {
    return {
        type: 'REMOVE_COMMENT',
        index: index
    }
}