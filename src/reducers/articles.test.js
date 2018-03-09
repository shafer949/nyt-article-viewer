import {expect} from 'code'
import {FETCH_ARTICLES} from '../actions/actionTypes'
import articlesReducer from './articles'

describe('articlesReducer', () => {

    it('should set the articles data', () => {

        const initialState = []
        const mockArticleData = { docs: [{ _id: '1', snippet: 'Test Article' }] }
        
        expect(articlesReducer(initialState, { type: FETCH_ARTICLES, articles: mockArticleData}))
        .to.equal(mockArticleData)
    })
})