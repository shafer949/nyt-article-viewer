import {FETCH_ARTICLES} from './actionTypes'
import 'isomorphic-fetch'

const API_KEY = 'b9fa9df009e94ec0ae3379d7b4543ac3';
const BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=${API_KEY}`;

export const fetchArticles = () => {
    return (dispatch) => {
        return fetch(`${BASE_URL}`)
        .then(resp => resp.json())
        .then(data => dispatch({ type: FETCH_ARTICLES, articles: data })
    )
    }
}