import {SORT_ARTICLES} from './actionTypes'
import 'isomorphic-fetch'
import moment from 'moment'
import * as utils from '../util/utils'

const API_KEY = 'b9fa9df009e94ec0ae3379d7b4543ac3';
const BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=${API_KEY}`;

export const sortArticles = (articles, sortArticlesBy) => {

    return {
        type: SORT_ARTICLES, 
        articles: utils.sortArray(articles, sortArticlesBy)
    }
}

export const fetchArticles = (startDate = moment().format('YYYYMMDD'), endDate = moment().format('YYYYMMDD'), searchText = 'new york times') => {
  
    const searchCriteriaUrl = BASE_URL + `&begin_date=${startDate}&end_date=${endDate}&q=${searchText}`
   
    return (dispatch) => {
        return fetch(`${searchCriteriaUrl}`)
        .then(resp => resp.json())
        .then(json => json.response.docs)
        .then(articles => dispatch(sortArticles(articles)))
   }
}