import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as articleActions from '../../actions/article';
import { bindActionCreators } from 'redux';
import Article from '../../components/admin/ArticleTitle.js';

class ArticleLists extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.actions.doLoad({});
    }
    componentWillReceiveProps(nextProps) {
        const { articleInfo } = nextProps;
        const { isFetching, articles } = articleInfo;

        console.log('receive');

        this.setState({
            isFetching: isFetching,
            articles: articles
        });
    }
    render() {
        const { actions, articleInfo } = this.props;
        const { isFetching, articles } = articleInfo;
        return (
           <div className="article-lists">
               <div className="article-operate"><Link to="/admin/create">新文章</Link></div>
               <div className="article-content">
                   {
                       isFetching && articles.length === 0 &&
                       <h3>正在加载...</h3>
                   }
                   {
                       articles.length > 0 &&
                       articles.map((article, i) => {
                           return(
                            <Article key={i}
                                     article={article}
                                     doDelete={actions.doDelete}
                                />
                           )
                       })
                   }
               </div>
           </div>
        )
    }
}
ArticleLists.PropTypes = {
    isFetching: PropTypes.bool.isRequired,
    articles: PropTypes.array.isRequired
};

export default connect(
        state => ({
        articleInfo: state.articleLists
    }),
        dispatch => ({
        actions: bindActionCreators(articleActions, dispatch)
    })
)(ArticleLists);

