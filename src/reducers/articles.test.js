import {expect} from 'code'
import {SORT_ARTICLES, FETCH_ARTICLES} from '../actions/actionTypes'
import articlesReducer from './articles'
import moment from 'moment';

describe('articlesReducer', () => {

    it('should fetch the articles data', () => {

        const initialState = []
        const mockArticleData = { 
            docs: [ 
                {
                    _id: '1', 
                    web_url: 'https://www.nytimes.com/2018/03/05/opinion/mom-gun-safety-intruder.html',
                    multimedia: [ { url: 'https://www.nytimes.com/images/2018/03/05/opinion/05Chatterji/05Chatterji-articleLarge.jpg' } ],
                    snippet: "Test Snippet 1", 
                    byline: { original: 'Test Person 1'},
                    word_Count: 250,
                    pub_date: moment().day(-17)
                }   
            ]
        }
        
        expect(articlesReducer(initialState, { type: FETCH_ARTICLES, articles: mockArticleData}))
        .to.equal(mockArticleData)
    })

    it('should sort the articles data', () => {

        const initialState = 
        [ 
           {
               _id: '1', 
               web_url: 'https://www.nytimes.com/2018/03/05/opinion/mom-gun-safety-intruder.html',
               multimedia: [ { url: 'https://www.nytimes.com/images/2018/03/05/opinion/05Chatterji/05Chatterji-articleLarge.jpg' } ],
               snippet: "Test Snippet 1", 
               byline: { original: 'Test Person 1'},
               word_Count: 250,
               pub_date: moment().day(-17)
           },
           {
               _id: '2', 
               web_url: 'https://www.nytimes.com/2018/03/05/opinion/mom-gun-safety-intruder.html',
               multimedia: [ { url: 'https://www.nytimes.com/images/2018/03/05/opinion/05Chatterji/05Chatterji-articleLarge.jpg' } ],
               snippet: "Test Snippet 1", 
               byline: { original: 'Test Person 1'},
               word_Count: 850,
               pub_date: moment()
           },
           {
               _id: '3', 
               web_url: 'https://www.nytimes.com/2018/03/05/opinion/mom-gun-safety-intruder.html',
               multimedia: [ { url: 'https://www.nytimes.com/images/2018/03/05/opinion/05Chatterji/05Chatterji-articleLarge.jpg' } ],
               snippet: "Test Snippet 1", 
               byline: { original: 'Test Person 1'},
               word_Count: 25,
               pub_date: moment().month(-5)
           }
        ]

        const mockArticleData = {
            articles: [ 
                {
                    _id: '3', 
                    web_url: 'https://www.nytimes.com/2018/03/05/opinion/mom-gun-safety-intruder.html',
                    multimedia: [ { url: 'https://www.nytimes.com/images/2018/03/05/opinion/05Chatterji/05Chatterji-articleLarge.jpg' } ],
                    snippet: "Test Snippet 1", 
                    byline: { original: 'Test Person 1'},
                    word_Count: 25,
                    pub_date: moment().month(-5)
                },
                {
                    _id: '1', 
                    web_url: 'https://www.nytimes.com/2018/03/05/opinion/mom-gun-safety-intruder.html',
                    multimedia: [ { url: 'https://www.nytimes.com/images/2018/03/05/opinion/05Chatterji/05Chatterji-articleLarge.jpg' } ],
                    snippet: "Test Snippet 1", 
                    byline: { original: 'Test Person 1'},
                    word_Count: 250,
                    pub_date: moment().day(-17)
                },
                {
                    _id: '2', 
                    web_url: 'https://www.nytimes.com/2018/03/05/opinion/mom-gun-safety-intruder.html',
                    multimedia: [ { url: 'https://www.nytimes.com/images/2018/03/05/opinion/05Chatterji/05Chatterji-articleLarge.jpg' } ],
                    snippet: "Test Snippet 1", 
                    byline: { original: 'Test Person 1'},
                    word_Count: 850,
                    pub_date: moment()
                }
            ] 
        }

        expect(articlesReducer(initialState, { type: SORT_ARTICLES, articles: mockArticleData}))
        .to.equal(mockArticleData)
    })
})