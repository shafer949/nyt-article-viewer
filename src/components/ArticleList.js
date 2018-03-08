import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ArticleListItem from './ArticleListItem'

export class ArticleList extends Component {

    render() {
        return (
            <ul className='article-list' id='article-list'>
                {
                    this.props.articles.map((article) => {
                        return <ArticleListItem key={article._id} article={article} />
                    })
                }
            </ul>
          )
    }
} 

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
      articles: state
    }
}
  
export default connect(mapStateToProps)(ArticleList)