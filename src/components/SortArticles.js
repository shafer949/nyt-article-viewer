import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortArticles } from '../actions/articles';
import SelectField  from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

function handleSelectChange(event, index, value) {
    
    const sortByValue = value
    const articles = this.props.articles

    this.props.sortArticles(articles, sortByValue)

    this.setState({
        sortArticlesBy: value || event.target.value
    })
}

export class SortArticles extends Component {

    state = {
        sortArticlesBy: 'pub_date'
    }

    render() {
        return (
            <SelectField 
                id='sort-articles-select' 
                className='sort-articles-select' 
                onChange={handleSelectChange.bind(this)} 
                value={this.state.sortArticlesBy}
                floatingLabelText='Sort By'
                // errorText={!night && 'Should be Night'}
            >
                <MenuItem value={'pub_date'} primaryText="Publication Date" />
                <MenuItem value={'word_count'} primaryText="Article Length" />
            </SelectField>
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