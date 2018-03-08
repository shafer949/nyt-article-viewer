import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/articles'
import PropTypes from 'prop-types'

function handleFormSubmit(event) {

    event.preventDefault()

    const startDate = this.state.startDate.format('YYYYMMDD')
    const endDate = this.state.endDate.format('YYYYMMDD')
    const searchText = this.state.searchText

    this.props.fetchArticles(startDate, endDate, searchText)
}

function handleChangeStart(date) {
    this.setState({
        startDate: date != null ? moment(date) : null
      });
}

function handleChangeEnd(date) {
    this.setState({
        endDate: date != null ? moment(date) : null
      });
}

function handleInputChange(event) {
    this.setState({
        searchText: event.target.value
    })
}

export class SearchForm extends Component {

    state = {
        startDate: null,
        endDate: null,
        searchText: ''
    }

    render() {
        return (
            <section id='form-container' className='form-container'>

                <h3>Welcome to the New York Times Article Search</h3>

                <form id='search-form' className='search-form' onSubmit={handleFormSubmit.bind(this)}>
                  
                  <div id='datepicker-container' className='datepicker-container'>

                        <label id='datepicker-startDate-label' className='datepicker-startDate-label'>
                            Start Date 
                            <DatePicker
                                className='start-date-datepicker'
                                selected={this.state.startDate}
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={handleChangeStart.bind(this)}
                            />
                        </label>

                        <label id='datepicker-endDate-label' className='datepicker-endDate-label'>
                            End Date 
                            <DatePicker
                                className='end-date-datepicker'
                                selected={this.state.endDate}
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={handleChangeEnd.bind(this)}
                            />
                        </label> 
                 </div>  

                <div id='search-text-input-container' className='search-text-input-container'>
                        <input className='search-text-input' placeholder='Enter search text' onChange={handleInputChange.bind(this)}/>
                </div>

                <div id='submit-form-button-container' className='submit-form-button-container'>
                        <button className='submit-form-button' type='submit'>Submit</button>
                </div>

                </form>    

            </section>
        )
    }
}

SearchForm.propTypes = {
    fetchArticles: PropTypes.func,
    handleFormSubmit: PropTypes.func,
    handleChangeStart: PropTypes.func,
    handleChangeEnd: PropTypes.func,
    handleInputChange: PropTypes.func,
    searchText: PropTypes.string
}


export default connect(null, { fetchArticles })(SearchForm)