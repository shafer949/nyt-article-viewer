import { expect } from 'code'
import { shallow } from 'enzyme'
import React from 'react'
import SortArticles from './SortArticles'

describe('Given `SortArticles`' ,() => {
    
    function requiredProps(overrides= {}) {
        return {
            ...overrides
        }
    }

    function renderComponent(props=requiredProps()) {

        return shallow(<SortArticles {...props}/>)

    }
    
    it('it should exist as a `select` tag', () => {

        const component = renderComponent()
        
        expect(component.type()).to.equal('select')

    })
})