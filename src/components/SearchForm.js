import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/articles';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {blue500, grey300} from 'material-ui/styles/colors';

function handleFormSubmit(event) {

    event.preventDefault()

    const startDate = this.state.startDate && this.state.startDate.format('YYYYMMDD')
    const endDate = this.state.endDate && this.state.endDate.format('YYYYMMDD')
    const searchText = this.state.searchText

    startDate && endDate && searchText &&
    this.props.fetchArticles(startDate, endDate, searchText)

}

function handleChangeStart(date) {

    this.setState({
        startDate: date && moment(date) 
      });

}

function handleChangeEnd(date) {

    this.setState({
        endDate: date && moment(date)
      });

}

function handleInputChange(event, index, value) {

    this.setState({
        searchText: event.target.value
    });

}

const styles = {
    underlineStyle: {
      borderColor: blue500
    },
    floatingLabelFocusStyle: {
      color:grey300
    }
  };

export class SearchForm extends Component {

    state = {
        startDate: null,
        endDate: null,
        searchText: ''
    }

    render() {

        const { startDate, endDate, searchText } = this.state
        const formIsValid = startDate !== null && endDate !== null && searchText !== ''

        return (
                <form id='search-form' className='search-form' onSubmit={handleFormSubmit.bind(this)}>
                 
                        <label id='datepicker-startDate-label' className='datepicker-startDate-label'>
                           Start Date 
                        </label>
                        <div id='datePicker-start' className='datePicker-start'>
                            <DatePicker  
                                className='start-date'
                                placeholderText="Select a start date"
                                selectsStart
                                selected={this.state.startDate}
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                maxDate={this.state.endDate}
                                onChange={handleChangeStart.bind(this)} 
                            />
                        </div>                      
                        <label id='datepicker-endDate-label' className='datepicker-endDate-label'>
                            End Date  
                        </label>  
                        <div id='datePicker-end' className='datePicker-end'>
                            <DatePicker
                                className='end-date'
                                placeholderText="Select a end date"
                                selectsEnd
                                selected={this.state.endDate}
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                minDate={this.state.startDate}
                                onChange={handleChangeEnd.bind(this)}
                            />
                        </div> 

                        <TextField
                             underlineFocusStyle={styles.underlineStyle} 
                             floatingLabelText="Search Text" 
                             floatingLabelFixed={true} 
                             id='search-text-input' 
                             className='search-text-input' 
                             hintText="Enter your search text" 
                             onChange={handleInputChange.bind(this)}
                        />

                        <RaisedButton 
                            label='Submit' 
                            className='submit-form-button' 
                            id='submit-form-button' 
                            type='submit'
                            disabled={!formIsValid}
                        />              
                </form>    
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

function mapStateToProps(state) {
    return {
      articles: state
    }
}

export default connect(mapStateToProps, { fetchArticles })(SearchForm)