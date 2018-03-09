import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import {ArticleList}  from './ArticleList'

describe('Given ArticleList', () => {

    const requiredProps = (overrideProps  = {}) => {
        
        const testProps = {articles: [ { _id: '1', snippet: "Test Article 1" }, { _id: '2', snippet: "Test Article 2" } ] }

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

          expect(component.find('ArticleListItem').length).to.equal(2)
    
        })
    
    })
})