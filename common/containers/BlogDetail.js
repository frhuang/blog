import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from '../actions/article';
import BlogHeader from '../components/BlogHeader';
import BlogFooter from '../components/BlogFooter';
import showdown from 'showdown';

export default class BlogDetail extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount() {
        const { id } = this.props.params;
        console.log(id);
        this.props.actions.getArticleById({id: id});
    }
    componentWillReceiveProps(nextProps) {
        const { articleDetail } = nextProps;
        const { success, article, isFetching } = articleDetail;
        const converter = new showdown.Converter();
        article.content = converter.makeHtml(article.content);
        if(success){
            this.setState({
                isFetching: isFetching,
                article: article
            });
        }
    }
    render(){
        const { articleDetail } = this.props;
        const { isFetching, article, success } = articleDetail;
        return (
            <div className="blog-lists">
                <BlogHeader title={article.title} createTime={article.create_time} />
                <div className="blog-content container">
                    {
                        isFetching  && !success &&
                        <h3>正在加载...</h3>
                    }
                    {
                        !isFetching && success &&
                            <div className="blog-content-content">
                                <div dangerouslySetInnerHTML={{__html: article.content }}></div>
                            </div>

                    }
                </div>
                <BlogFooter />
            </div>
        )
    }
}

export default connect(
        state => ({
        articleDetail: state.articleDetail
    }),
        dispatch => ({
        actions: bindActionCreators(articleActions, dispatch)
    })
)(BlogDetail);