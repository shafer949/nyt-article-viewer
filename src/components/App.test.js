import { expect } from 'code'
import { shallow } from 'enzyme'
import React from 'react'
import App from './App'

describe('Given `App`' ,() => {
    
    function requiredProps(overrides= {}) {
        return {
            ...overrides
        }
    }

    function renderComponent(props=requiredProps()) {

        return shallow(<App {...props}/>)

    }
    
    it('it should exist as a `main` tag', () => {

        const component = renderComponent()
        
        expect(component.type()).to.equal('main')

    })

    it('should contain a connected `SearchForm` component', () => {

        const component = renderComponent()

        expect(component.find('Connect(SearchForm)').exists()).to.be.true()
    })

    it('should contain a connected `ArticleList` component', () => {

        const component = renderComponent()

        expect(component.find('Connect(ArticleList)').exists()).to.be.true()
    })
})