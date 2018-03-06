import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import sinon from 'sinon'
import {expect} from 'code'
import 'isomorphic-fetch'
import {fetchArticles} from './articles'
import {FETCH_ARTICLES} from './actionTypes'

const createMockStore = configureMockStore([thunk])
const store = createMockStore({articles:{}})
const mockResponse = { docs:'Article Information'}
const json = sinon.stub().returns(mockResponse)
const fetchStub = sinon.stub(global,'fetch').resolves({json})

it('should create an async action to fetch the articles', () => {

    const expectedActions = [{ type: FETCH_ARTICLES, articles: mockResponse }]

    return store.dispatch(fetchArticles()).then(()=> {

        expect(store.getActions()).to.equal(expectedActions)
    })
})