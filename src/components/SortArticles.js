import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { sortArticles } from '../actions/articles'

function handleSelectChange(event) {
    
    const sortByValue = event.target.value
    const articles = this.props.articles

    this.props.sortArticles(articles, sortByValue)

    this.setState({
        sortArticlesBy: event.target.value
    })
}

export class SortArticles extends Component {

    state = {
        sortArticlesBy: ''
    }

    render() {
        return (
            <label id='sort-articles-select-label' className='sort-articles-select-label'>
                Sort Articles By               
            <select id='sort-articles-select' className='sort-articles-select' onChange={handleSelectChange.bind(this)}>
                <option value='pub_date'>Publication Date - Ascending </option>
                <option value='word_count'>Article Length - Ascending</option>                
            </select>
            </label>
          )
    }
} 

SortArticles.propTypes = {
    sortArticleBy: PropTypes.string,
    sortArticles: PropTypes.func
}

function mapStateToProps(state) {
    return {
      articles: state
    }
}
  
export default connect(mapStateToProps, { sortArticles })(SortArticles)