import {expect} from 'code'
import {FETCH_ARTICLES} from '../actions/actionTypes'
import articlesReducer from './articles'

describe('articlesReducer', () =>{

    const mockArticleData = {docs: 'Article Information'}

    it('should set the articles data', () => {

        const initialState = []
        
        expect(articlesReducer(initialState, { type: FETCH_ARTICLES, articles: mockArticleData}))
        .to.equal(mockArticleData)
    })
})