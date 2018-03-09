import {FETCH_ARTICLES, SORT_ARTICLES} from '../actions/actionTypes'

function fetchArticles (state, action) {
    return action.articles  
} 

function sortArticles (state, action) {
    return action.articles
}

export default function (state=[], action) {
    const actionHandlers = {
        [FETCH_ARTICLES]: fetchArticles,
        [SORT_ARTICLES]: sortArticles
    }

    const reducer = actionHandlers[action.type]

    return reducer ? reducer(state, action) : state
}