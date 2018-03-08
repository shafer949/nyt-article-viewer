import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import sinon from 'sinon'
import {expect} from 'code'
import 'isomorphic-fetch'
import {fetchArticles} from './articles'
import {FETCH_ARTICLES} from './actionTypes'
import moment from 'moment';

const createMockStore = configureMockStore([thunk])
const store = createMockStore({articles:[]})

let mockResponse,
    sandbox,
    fetchStub,
    mockError

beforeEach(() => {

    sandbox = sinon.createSandbox()

    mockResponse = { 
        docs: [ { _id: '1', snippet: "Test Article 1" } ]
    }

    mockError = {
        errors: ['Invalid parameters supplied.'] 
    }

    fetchStub = sandbox.stub(global,'fetch')
    .resolves({
        json: sandbox.stub().resolves({
            response: mockResponse
        })
    })
})

afterEach(() => {

    sandbox.restore()

    store.clearActions();
})

it('should create an async action to fetch the articles with default parameters supplied', () => {
    
    const expectedActions = [{ type: FETCH_ARTICLES, articles: mockResponse.docs }]

    return store.dispatch(fetchArticles())
        .then(()=> {
        
            expect(store.getActions()).to.equal(expectedActions)
        })
})        

it('should fetch the articles based on valid parameters supplied', () => {

    const mockStartDate = moment().format('YYYYMMDD')

    const mockEndDate = moment().day(7).format('YYYYMMDD')

    const mockSearchText = 'dog'

    const expectedActions = [{ type: FETCH_ARTICLES, articles: mockResponse.docs }]

    return store.dispatch(fetchArticles(mockStartDate, mockEndDate, mockSearchText))
        .then(()=> {
            
            expect(store.getActions()).to.equal(expectedActions)
        })
})
