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
                    word_count: 123,
                    pub_date: moment().day(-17)
                },
                {
                    _id: '2', 
                    web_url: 'https://www.nytimes.com/2018/03/05/opinion/mom-gun-safety-intruder.html',
                    multimedia: [ { url: 'https://www.nytimes.com/images/2018/03/05/opinion/05Chatterji/05Chatterji-articleLarge.jpg' } ],
                    snippet: "Test Snippet 1", 
                    byline: { original: 'Test Person 1'},
                    word_count: 800,
                    pub_date: moment()
                },
                {
                    _id: '3', 
                    web_url: 'https://www.nytimes.com/2018/03/05/opinion/mom-gun-safety-intruder.html',
                    multimedia: [ { url: 'https://www.nytimes.com/images/2018/03/05/opinion/05Chatterji/05Chatterji-articleLarge.jpg' } ],
                    snippet: "Test Snippet 1", 
                    byline: { original: 'Test Person 1'},
                    word_count: 50,
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


    it('should exist as a `SelectField` tag', () => {

        const component = renderComponent();

        expect(component.find('SelectField').length).to.equal(1);
    })

    it('should have default state for sortArticlesBy', () => {

        const component = renderComponent();

        expect(component.state().sortArticlesBy).to.equal('pub_date');
    })

    describe('Given the `SelectField`', () => {

        it('should have two options', () => {

            const component = renderComponent();

            expect(component.find('MenuItem').length).to.equal(2);
        })

        it('should have a default value of pub_date', () => {

            const component = renderComponent();
            
            expect(component.find('SelectField').props().value).to.equal('pub_date');
        
        })
    })

    describe('When the `SelectField` has a value', () => {

        let component, action

        beforeEach(() => {

            action = sandbox.spy()   

            component = renderComponent({sortArticles:action})
            
            component.setState({ 
                sortArticlesBy: 'word_count'
            });
            
            component.find('SelectField').simulate('change', { target: { value: 'word_count' } })
           
        })
        
        it('should call an action', () => {
            
            sinon.assert.calledOnce(action)
        })

        it('should have a local state that is word_count', () => {

            expect(component.state().sortArticlesBy).to.equal('word_count')
        })
    })
})

