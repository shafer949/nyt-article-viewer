import {SORT_ARTICLES} from './actionTypes'
import 'isomorphic-fetch'
import moment from 'moment';

const API_KEY = 'b9fa9df009e94ec0ae3379d7b4543ac3';
const BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=${API_KEY}`;

export const sortArticles = (articles=[], sortArticlesBy='pub_date') => {

    return {
        type: SORT_ARTICLES, 
        articles: [...articles].sort((a,b) => {
          console.log('sort articles')
            if(sortArticlesBy === 'word_count') {
              return  a.word_count < b.word_count
            } 
            else {
                const publishedDateA = moment(a.pub_date)
                const publishedDateB = moment(b.pub_date)
    
               return publishedDateA.diff(publishedDateB)
            }
        
        })
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