import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import SearchForm from './SearchForm'

describe('Given `SearchForm`' ,() => {
    
    function requiredProps(overrides= {}) {
        return {
            ...overrides
        }
    }

    function renderComponent(props=requiredProps()) {

        return shallow(<SearchForm {...props}/>)

    }
    
    it('should exist as a `section` tag', () => {

        const component = renderComponent()
        
        expect(component.type()).to.equal('section')

    })
    
    it('should contain a `form`', () => {

        const component = renderComponent()
        
        expect(component.find('.search-form').type()).to.equal('form')

    })
})
