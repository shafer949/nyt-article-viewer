import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import sinon from 'sinon'
import {expect} from 'code'
import 'isomorphic-fetch'
import {fetchArticles, sortArticles} from './articles'
import {FETCH_ARTICLES, SORT_ARTICLES} from './actionTypes'
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
        docs: [ 
            {
                _id: '1', 
                web_url: 'https://www.nytimes.com/2018/03/05/opinion/mom-gun-safety-intruder.html',
                multimedia: [ { url: 'https://www.nytimes.com/images/2018/03/05/opinion/05Chatterji/05Chatterji-articleLarge.jpg' } ],
                snippet: "Test Snippet 1", 
                byline: { original: 'Test Person 1'},
                word_count: 123,
                pub_date: moment().day(-17)
            }
        ] 
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

it('creates an async action to fetch the articles with default parameters', () => {
    
    const expectedActions = [{ type: SORT_ARTICLES, articles: mockResponse.docs }]

    return store.dispatch(fetchArticles())
        .then(()=> {
        
            expect(store.getActions()).to.equal(expectedActions)
        })
})        

it('should fetch the articles based on valid parameters supplied', () => {

    const mockStartDate = moment().format('YYYYMMDD')

    const mockEndDate = moment().day(7).format('YYYYMMDD')

    const mockSearchText = 'dog'

    const expectedActions = [{ type: SORT_ARTICLES, articles: mockResponse.docs }]

    return store.dispatch(fetchArticles(mockStartDate, mockEndDate, mockSearchText))
        .then(()=> {
            
            expect(store.getActions()).to.equal(expectedActions)
        })
})

it('creates an action to sort the articles based on the default parameters', () => {
    
    const expectedAction = { type: SORT_ARTICLES, articles: [] }

    expect(sortArticles()).to.equal(expectedAction)
})

it('should sort the articles based on articles being supplied and default selected sort option', () => {
    
    const expectedAction = { type: SORT_ARTICLES, articles: mockResponse.docs }

    expect(sortArticles(mockResponse.docs)).to.equal(expectedAction)
}) 

it('should sort the articles based on default articles being supplied and the selected sort option', () => {
    
    const expectedAction = { type: SORT_ARTICLES, articles: [] }

    const mockSelectedSortOption = 'word_count'

    expect(sortArticles([], mockSelectedSortOption)).to.equal(expectedAction)
})   

it('should sort the articles based on articles being supplied and the selected sort option', () => {
    
    const expectedAction = { type: SORT_ARTICLES, articles: mockResponse.docs }

    const mockSelectedSortOption = 'word_count'

    expect(sortArticles(mockResponse.docs, mockSelectedSortOption)).to.equal(expectedAction)
})   