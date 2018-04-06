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

    it('should contain a `form`', () => {

        const component = renderComponent()
        
        expect(component.find('.search-form').type()).to.equal('form')

    })

    describe('Given the form', () => {
        
        it('should contain an `label` tag for the start date DatePicker', () => {

            const component = renderComponent()

            expect(component.find('.datepicker-startDate-label').type()).to.equal('label')
        })

        it('should contain an `div` tag for the start date DatePicker', () => {

            const component = renderComponent()

            expect(component.find('.datePicker-start').type()).to.equal('div')
        })

        it('should contain a start date and end date `DatePicker`', () => {

            const component = renderComponent()

            expect(component.find('DatePicker').length).to.equal(2)
        })

        it('should contain an `label` tag for the end date DatePicker', () => {

            const component = renderComponent()

            expect(component.find('.datepicker-endDate-label').type()).to.equal('label')
        })

        it('should contain an `div` tag for the end date DatePicker', () => {

            const component = renderComponent()

            expect(component.find('.datePicker-end').type()).to.equal('div')
        })

        it('should contain an `TextField`', () => {

            const component = renderComponent()

            expect(component.find('TextField').length).to.equal(1)        
        })

        it('should contain a submit `RaisedButton`', () => {

            const component = renderComponent()

            expect(component.find('RaisedButton').length).to.equal(1) 
        })
    })    

    describe('When the startDate and endDate `Datepicker` each have a value other than null', () => {

        let component

        beforeEach(() => {

            component = renderComponent()

            component.setState({ 
                startDate: moment(),
                endDate: moment()
            });
            component.find('DatePicker').at(0).simulate('change', { target: { value: component.state().startDate } })
            
            component.find('DatePicker').at(1).simulate('change', { target: { value: component.state().endDate } })
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

    describe('When the `TextField` has a value', () => {

        let component, mockSearchText

        beforeEach(() => {

            mockSearchText = 'dog'

            component = renderComponent()
                
            component.find('TextField').simulate('change', { target: { value: mockSearchText } })
        })

        it('should have a local searchText', () => {

            expect(component.state().searchText).to.equal(mockSearchText)
        })
    })

    describe('When submit `RaisedButton` is clicked', () => {
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
