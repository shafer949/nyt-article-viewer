import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import {ArticleList}  from './ArticleList'
import moment from 'moment';

describe('Given ArticleList', () => {

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
    
        return shallow(<ArticleList {...props} />)
        
    }

    it('should exist as a `ul` tag', () => {

        const component = renderComponent();

        expect(component.find('.article-list').length).to.equal(1);
    })

    describe('when given articles data', () => {

        it('should render a `ArticleListItem` for each data item', () => {
    
           const component = renderComponent();

          expect(component.find('ArticleListItem').length).to.equal(3)
    
        })
    
    })
})