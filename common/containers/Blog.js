import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as articleActions from '../actions/article';
import { bindActionCreators } from 'redux';
import BlogHeader from '../components/BlogHeader';
import BlogBar from '../components/BlogBar';
import BlogFooter from '../components/BlogFooter';

class BLog extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.actions.doLoad({});
    }
    componentWillReceiveProps(nextProps) {
        const { articlesInfo } = nextProps;
        const { isFetching, articles } = articlesInfo;
        this.setState({
            isFetching: isFetching,
            articles: articles
        });
    }
    render() {
        const { articlesInfo, actions } = this.props;
        const { isFetching, articles } = articlesInfo;
        return (
            <div className="blog-lists">
                <BlogHeader title="SAMEWII" createTime="想点什么.做点什么.做自己就好" />
                <div className="blog-content container">
                    {
                        isFetching && articles.length === 0 &&
                        <h3>正在加载...</h3>
                    }
                    {
                        !isFetching && articles.length === 0 &&
                        <h3>空空如也,快去写篇文章吧</h3>
                    }
                    {
                        articles.length > 0 &&
                        articles.map((article, i) => {
                            return(
                                <BlogBar key={i}
                                         article={article}
                                         getArticleById={actions.getArticleById}
                                    />
                            )
                        })
                    }
                </div>
                <BlogFooter />
            </div>
        )
    }
}

BLog.PropTypes = {
    isFetching: PropTypes.bool.isRequired,
    articles: PropTypes.array.isRequired
};

export default connect(
        state => ({
            articlesInfo: state.articleLists
    }),
        dispatch => ({
        actions: bindActionCreators(articleActions, dispatch)
    })
)(BLog);