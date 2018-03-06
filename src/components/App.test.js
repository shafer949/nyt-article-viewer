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
})