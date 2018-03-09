import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { SearchForm } from './SearchForm'
import 'isomorphic-fetch'
import moment from 'moment';

describe('Given `SearchForm`' ,() => {
    let sandbox

    const requiredProps = (overrideProps  = {}) => {
        return {
            ...overrideProps
        }
    }
    
    const renderComponent = (props = requiredProps()) => {
    
        return shallow(<SearchForm {...props} />)
        
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

    it('should contain a `form`', () => {

        const component = renderComponent()
        
        expect(component.find('.search-form').type()).to.equal('form')

    })

    describe('Given the form', () => {

        it('should contain an `div` tag', () => {

            const component = renderComponent()

            expect(component.find('.datepicker-container').type()).to.equal('div')
        })

        it('should contain a start date and end date `DatePicker`', () => {

            const component = renderComponent()

            expect(component.find('DatePicker').length).to.equal(2)
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

    describe('When the startDate and endDate `datepicker` each have a value other than null', () => {

        let component

        beforeEach(() => {

            component = renderComponent()

            component.setState({ 
                startDate: moment(),
                endDate: moment()
            });

            component.find('.start-date-datepicker').simulate('change', { target: { value: component.state().startDate } })

            component.find('.end-date-datepicker').simulate('change', { target: { value: component.state().endDate } })
        })

        afterEach(() => {
            component.setState({ 
                startDate: null,
                endDate: null
            });
        })

        it('should set the local startDate to a moment date', () => {

            expect(component.state().startDate).to.equal(component.state().startDate)
        })

        it('should set the local endDate to a moment date', () => {

            expect(component.state().endDate).to.equal(component.state().endDate)
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
        let fetchAction, component

        beforeEach(() => {

            fetchAction = sandbox.spy() 

            component = renderComponent({fetchArticles:fetchAction})

            component.setState({ 
                startDate: moment(),
                endDate: moment().day(7),
                searchText: 'dog'
            });

            component.find('.search-form').simulate('submit', {
                preventDefault: () => {}
              })

        })

        it('should call fetchArticles actions', () => {         
            
            sinon.assert.calledOnce(fetchAction)
        })    
    })
})
