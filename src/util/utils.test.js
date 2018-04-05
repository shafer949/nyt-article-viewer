import { expect } from 'code'
import React from 'react'
import * as utils from './utils' 
import moment from 'moment';

describe('`utils`', () => {

    describe('Given sortArray function', () => {
        let array

        beforeEach(() => {

            array = [
                {
                    _id: '1', 
                    word_count: 123,
                    pub_date: moment().day(-2)
                },
                {
                    _id: '2', 
                    word_count: 99,
                    pub_date: moment().day(-1)
                }
            ]
        })
        it('should sort based on defaults', () => {

            const expected = [];
    
            expect(utils.sortArray()).to.equal(expected);
    
        })

        it('should sort based on array supplied and default sort criteria', () => {

            const array = [
                {
                    _id: '1', 
                    pub_date: moment().day(-2)
                },
                {
                    _id: '2', 
                    pub_date: moment().day(-1)
                }
            ]

            const expected = [
                {
                    _id: '2', 
                    pub_date: moment().day(-1)
                },
                {
                    _id: '1', 
                    pub_date: moment().day(-2)
                }
            ]
    
            expect(utils.sortArray(array)).to.equal(expected);
    
        })

        
        it('should sort based on array supplied and sort criteria changed', () => {
           
            const array = [
                {
                    _id: '1', 
                    word_count: 123
                },
                {
                    _id: '2', 
                    word_count: 99
                }
            ]

            const expected = [
                {
                    _id: '2', 
                    word_count: 99
                },
                {
                    _id: '1', 
                    word_count: 123
                }
            ]
            const sortCriteria = 'word_count'
           
            expect(utils.sortArray(array,sortCriteria)).to.equal(expected);
    
        })
    })
})