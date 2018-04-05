import { expect } from 'code'
import { shallow } from 'enzyme'
import React from 'react'
import { App } from './App'
import moment from 'moment';

describe('Given `App`' ,() => {

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
    
        return shallow(<App {...props} />)
        
    }
    
    it('it should exist as a `MuiThemeProvider`', () => {

        const component = renderComponent()
        
        expect(component.find('MuiThemeProvider').exists()).to.be.true()

    })

    it('it should contain a `Paper`', () => {

        const component = renderComponent()
        
        expect(component.find('Paper').exists()).to.be.true()

    })

    it('should contain a `h1` tag with text', () => {

        const component = renderComponent()

        const elementText = component.find('h1').first().text()

        expect(elementText.length).to.be.greaterThan(0)

    })

    it('it should contain two `Divider` tags', () => {

        const component = renderComponent()
        
        expect(component.find('Divider').length).to.equal(2)

    })

    it('should contain a connected `SearchForm` component', () => {

        const component = renderComponent()

        expect(component.find('Connect(SearchForm)').exists()).to.be.true()
    })

    it('should contain a `img` tag when no articles are shown', () => {

        const newProps = { 
            articles: [] 
        }
        const component = renderComponent({...newProps})

       expect(component.find('.no-results-image').length).to.equal(1);
    })

    it('should not contain a `img` tag when articles are shown', () => {

        const component = renderComponent()

       expect(component.find('.no-results-image').length).to.equal(0);
    })

    it('should contain a connected `SortArticles` component', () => {

        const component = renderComponent()

        expect(component.find('Connect(SortArticles)').exists()).to.be.true()
    })

    it('should contain a connected `ArticleList` component', () => {

        const component = renderComponent()

        expect(component.find('Connect(ArticleList)').exists()).to.be.true()
    })
})