import React, { Component } from 'react';
import { Link } from 'react-router';

export default class BlogBar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { article, getArticleById} = this.props;
        console.log(article);
        return (
            <div className="blog-article">
                <Link to={"/blogDetail/"+article._id} className="article-title">{article.title}</Link>
                <p className="article-time">{article.create_time}</p>
                <Link to={"/blogDetail/"+article._id} className="article-title">
                    <span className="article-describe">{article.describe}</span>
                </Link>
                <hr clasaName="article-line" />
            </div>
        )
    }
}