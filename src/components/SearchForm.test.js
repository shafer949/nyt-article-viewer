import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { SearchForm } from './SearchForm'
import 'isomorphic-fetch'
import moment from 'moment';

describe('Given `SearchForm`' ,() => {
    let sandbox

    function requiredProps(overrides= {}) {

        return {
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

    describe('Given the form', () => {

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

        it('should contain an `div` tag with an `input`', () => {

            const component = renderComponent()

            expect(component.find('.search-text-input-container').type()).to.equal('div')
            
            expect(component.find('.search-text-input').type()).to.equal('input')        
        })

        it('should contain an `div` tag with a `button`', () => {

            const component = renderComponent()

            expect(component.find('.submit-form-button-container').type()).to.equal('div')
            
            expect(component.find('.submit-form-button').type()).to.equal('button')
        })
    })    

    describe('When the startDate `datepicker` has a value', () => {

        let component

        beforeEach(() => {

            component = renderComponent()

            component.setState({ 
                startDate: moment()
            });
                
            component.find('.start-date-datepicker').simulate('change', { target: { value: component.state().startDate } })
        })

        it('should have a local startDate', () => {

            expect(component.state().startDate).to.equal(component.state().startDate)
        })
    })

    describe('When the endDate `datepicker` has a value', () => {

        let component, mockEndDate

        beforeEach(() => {

            component = renderComponent()

            component.setState({ 
                endDate: moment()
            });

            component.find('.end-date-datepicker').simulate('change', { target: { value: component.state().endDate } })
        })

        it('should have a local endDate', () => {

            expect(component.state().endDate).to.equal( component.state().endDate)
        })
    })

    describe('When the `input` has a value', () => {

        let component, mockSearchText

        beforeEach(() => {

            mockSearchText = 'dog'

            component = renderComponent()
                
            component.find('.search-text-input').simulate('change', { target: { value: mockSearchText } })
        })

        it('should have a local searchText', () => {

            expect(component.state().searchText).to.equal(mockSearchText)
        })
    })

    describe('When submit `button` is clicked', () => {

        let component, action

        beforeEach(() => {

            action = sinon.spy()   

            component = renderComponent({fetchArticles:action})
            
            component.setState({ 
                startDate: moment(),
                endDate: moment().day(7),
                searchText: 'dog'
            });

            component.find('.search-form').simulate('submit', {
                preventDefault: () => {}
              })
        })

        it('should call an action', () => {
            
            sinon.assert.calledOnce(action)
        })
    })
})
