import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { SortArticles } from './SortArticles'
import moment from 'moment';

describe('Given `SortArticles`', () => {
    
    const requiredProps = (overrideProps  = {}) => {
        
        const testProps = {
            articles: [ 
                {
                    _id: '1', 
                    web_url: 'https://www.nytimes.com/2018/03/05/opinion/mom-gun-safety-intruder.html',
                    multimedia: [ { url: 'https://www.nytimes.com/images/2018/03/05/opinion/05Chatterji/05Chatterji-articleLarge.jpg' } ],
                    snippet: "Test Snippet 1", 
                    byline: { original: 'Test Person 1'},
                    word_Count: 123,
                    pub_date: moment().day(-17)
                },
                {
                    _id: '2', 
                    web_url: 'https://www.nytimes.com/2018/03/05/opinion/mom-gun-safety-intruder.html',
                    multimedia: [ { url: 'https://www.nytimes.com/images/2018/03/05/opinion/05Chatterji/05Chatterji-articleLarge.jpg' } ],
                    snippet: "Test Snippet 1", 
                    byline: { original: 'Test Person 1'},
                    word_Count: 800,
                    pub_date: moment()
                },
                {
                    _id: '3', 
                    web_url: 'https://www.nytimes.com/2018/03/05/opinion/mom-gun-safety-intruder.html',
                    multimedia: [ { url: 'https://www.nytimes.com/images/2018/03/05/opinion/05Chatterji/05Chatterji-articleLarge.jpg' } ],
                    snippet: "Test Snippet 1", 
                    byline: { original: 'Test Person 1'},
                    word_Count: 50,
                    pub_date: moment().month(-5)
                }
            ] 
        }

        return {
            ...testProps,
            ...overrideProps
        }
    }
    
    const renderComponent = (props = requiredProps()) => {
    
        return shallow(<SortArticles {...props} />)
        
    }

    let sandbox

    beforeEach(() => {

        sandbox = sinon.createSandbox()

    })

    afterEach(() => {

        sandbox.restore()

    })


    it('should exist as a `select` tag', () => {

        const component = renderComponent();

        expect(component.find('.sort-articles-select').length).to.equal(1);
    })

    describe('Given the `select`', () => {

        const options = [
            { value: 'word_count', label: 'Article Length' },
            { value: 'pub_date', label: 'Publication Date' },
        ]

        it('should have two options', () => {

            const component = renderComponent();

            expect(component.find('option').length).to.equal(options.length);
        })
    })

    describe('When the `select` has a value', () => {

        let component, action

        beforeEach(() => {

            action = sandbox.spy()   

            component = renderComponent({sortArticles:action})
            
            component.setState({ 
                sortArticlesBy: 'word_count'
            });

            component.find('.sort-articles-select').simulate('change', { target: { value: 'word_count' } })
        })
        
        it('should call an action', () => {
            
            sinon.assert.calledOnce(action)
        })

        it('should have a local sortArticlesBy that is not an empty string', () => {

            expect(component.state().sortArticlesBy).to.equal('word_count')
        })
    })
})

