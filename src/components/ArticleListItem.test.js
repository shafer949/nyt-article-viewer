import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import ArticleListItem from './ArticleListItem'

describe('Given ArticleListItem', () => {

    const requiredProps = (overrideProps  = {}) => {
    
        const testProps = {
            article: { 
                _id: '1', 
                 web_url: 'https://www.nytimes.com/2018/03/05/opinion/mom-gun-safety-intruder.html',
                 multimedia: [ { url: 'https://www.nytimes.com/images/2018/03/05/opinion/05Chatterji/05Chatterji-articleLarge.jpg' } ],
                 snippet: "Test Snippet 1", 
                 byline: { original: 'Test Person 1'} 
            }
        }

        return {
            ...testProps,
            ...overrideProps
        }
    }
    
    const renderComponent = (props = requiredProps()) => {
    
        return shallow(<ArticleListItem {...props} />)
        
    }

    it('should contain an `li` tag for the article', () => {

        const component = renderComponent();

        expect(component.find('.article-list-item').type()).to.equal('li');
    })
    
    it('should contain an `a` tag for the article', () => {

        const component = renderComponent();

        expect(component.find('.article-link').type()).to.equal('a');
    })

    describe('Given `a` tag', () => {

        it('should contain an `img` tag for the article', () => {

            const component = renderComponent();
    
            expect(component.find('.article-image').type()).to.equal('img');
        })
    })

    it('should contain two `p` tags for the article', () => {

        const component = renderComponent();

        expect(component.find('.article-snippet').type()).to.equal('p');
        
        expect(component.find('.article-author').type()).to.equal('p');
    })    
})