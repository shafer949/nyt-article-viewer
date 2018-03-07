import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import sinon from 'sinon'
import {expect} from 'code'
import 'isomorphic-fetch'
import {fetchArticles} from './articles'
import {FETCH_ARTICLES} from './actionTypes'

const createMockStore = configureMockStore([thunk])
const store = createMockStore({articles:{}})
const mockResponse = {docs:[{}]}

const fetchStub = sinon.stub(global,'fetch')
    .resolves({
        json: sinon.stub().resolves({
            response: mockResponse
        })})
    
it('should create an async action to fetch the articles', () => {

    const expectedActions = [{ type: FETCH_ARTICLES, articles: [{}] }]

    return store.dispatch(fetchArticles()).then(()=> {
        expect(store.getActions()).to.equal(expectedActions)
    })
})