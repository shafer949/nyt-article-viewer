import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { SearchForm } from './SearchForm'
import 'isomorphic-fetch'

describe('Given `SearchForm`' ,() => {
    let sandbox

    function requiredProps(overrides= {}) {

        const testProps = { articles: {} }

        return {
            ...testProps,
            ...overrides
        }
    }

    function renderComponent(props=requiredProps()) {

        return shallow(<SearchForm {...props}/>)

    }
    
    beforeEach(() => {

        sandbox = sinon.createSandbox()

    })

    afterEach(() => {

        sandbox.restore()

    })

    it('should exist as a `section` tag', () => {

        const component = renderComponent()
        
        expect(component.type()).to.equal('section')

    })
    
    it('should exist as a `h3` tag with text', () => {

        const component = renderComponent()

        const elementText = component.find('h3').first().text()

        expect(elementText.length).to.be.greaterThan(0)

    })

    it('should contain a `form`', () => {

        const component = renderComponent()
        
        expect(component.find('.search-form').type()).to.equal('form')

    })

    describe('form', () => {

        it('should contain an `div` tag', () => {

            const component = renderComponent()

            expect(component.find('.datepicker-container').type()).to.equal('div')
        })

        it('should contain `DatePicker` with a `label` of Start Date', () => {

            const component = renderComponent()

            const elementText = component.find('.datepicker-startDate-label').text()

            expect(elementText).to.equal('Start Date<DatePicker />')

            expect(component.find('DatePicker').first().exists()).to.be.true()

        })

        it('should contain `DatePicker` with a `label` of End Date', () => {

            const component = renderComponent()

            const elementText = component.find('.datepicker-endDate-label').text()

            expect(elementText).to.equal('End Date<DatePicker />')

            expect(component.find('DatePicker').last().exists()).to.be.true()

        })

        it('should contain an `div` tag', () => {

            const component = renderComponent()

            expect(component.find('.search-text-input-container').type()).to.equal('div')
        })

        it('should contain `input`', () => {

            const component = renderComponent()

            expect(component.find('.search-text-input').type()).to.equal('input')

        })

        it('should contain an `div` tag', () => {

            const component = renderComponent()

            expect(component.find('.submit-form-button-container').type()).to.equal('div')
        })

        it('should contain submit `button`', () => {

            const component = renderComponent()

            expect(component.find('.submit-form-button').type()).to.equal('button')

        })
    })    

    describe('When submit `button` is clicked', () => {

        let component, action

        beforeEach(() => {

            action = sinon.spy()   

            component = renderComponent({fetchArticles:action})
           
            component.find('.search-form').simulate('submit', {
                preventDefault: () => {}
              })
        })

        it('should call an action', () => {
            
            sinon.assert.calledOnce(action)
        })
    })
})
