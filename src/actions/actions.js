
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
export function postsFetchData(url) {
    console.log('inisde psts fetch data')
    return (dispatch) => {
       
        fetch(url)
            .then((response) => {
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(postsFetchDataSuccess(items)))
            
    };
}
export function postsFetchDataSuccess(items){
     return {
        type: 'POSTS_FETCH_DATA_SUCCESS',
        items
    };
}