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

    it('it should contain a `Paper`', () => {

        const component = renderComponent()
        
        expect(component.find('Paper').exists()).to.be.true()

    })

    it('should contain an `li` tag for the article', () => {

        const component = renderComponent();

        expect(component.find('.article-list-item').type()).to.equal('li');
    })
    
    it('should contain an `a` tag for the article', () => {

        const component = renderComponent();

        expect(component.find('.article-link').type()).to.equal('a');
    })

    describe('Given `a` tag', () => {

        it('should contain an `img` tag for the article if image is returned', () => {

            const component = renderComponent();
    
            expect(component.find('.article-image').length).to.equal(1);
            
            expect(component.find('.no-article-image').length).to.equal(0);
        })

        it('should contain an `img` tag for the article if image is not returned', () => {

            const newProps = {
                article: { 
                    _id: '1', 
                     web_url: 'https://www.nytimes.com/2018/03/05/opinion/mom-gun-safety-intruder.html',
                     multimedia: [],
                     snippet: "Test Snippet 1", 
                     byline: { original: 'Test Person 1'} 
                }
            }

            const component = renderComponent({...newProps});

            expect(component.find('.article-image').length).to.equal(0);

            expect(component.find('.no-article-image').length).to.equal(1);
        })
    })

    it('should contain two `p` tags for the article', () => {

        const component = renderComponent();

        expect(component.find('.article-snippet').type()).to.equal('p');
        
        expect(component.find('.article-author').type()).to.equal('p');
    })    
})