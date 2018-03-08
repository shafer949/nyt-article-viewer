import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SortArticles from './SortArticles'

export class SortArticles extends Component {

    render() {
        return (
            <select></select>
          )
    }
} 

SortArticles.propTypes = {
    articles: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
      articles: state
    }
}
  
export default connect(mapStateToProps)(SortArticles)